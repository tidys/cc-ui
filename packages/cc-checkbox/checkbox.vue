<template>
  <div class="checkbox">
    <input type="checkbox" v-model="val" :disabled="disabled" @change.stop.prevent="onChange" />
    <span class="text" v-if="label.length">{{ label }}</span>
    <slot name="label"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'CCCheckbox',
  emits: ['update:value', 'change'],
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const val = ref(props.value);
    const label = ref(props.label);
    watch(
      () => props.value,
      (v) => {
        val.value = v;
      },
      {
        deep: true,
      }
    );
    return {
      val,
      label,
      onChange() {
        const v = val.value;
        emit('update:value', v);
        emit('change', v);
      },
    };
  },
});
</script>

<style scoped lang="less">
.checkbox {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  input {
    margin: 3px;
  }
  .text {
    white-space: nowrap;
    font-size: 13px;
    line-height: 13px;
    color: aliceblue;
    user-select: none;
  }
}
</style>
