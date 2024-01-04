<template>
  <div class="cc-input">
    <label style="display: flex; flex: 1">
      <input @focusout="onFocusout" :class="{ readonly: readonly, disabled: disabled }" @focusin="onFocusin" @blur="onBlur" :readonly="readonly" :maxlength="maxlength" :disabled="disabled" v-model="text" type="text" />
    </label>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, toRefs, watch } from 'vue';

export default defineComponent({
  name: 'CCInput',
  props: {
    value: {
      type: String,
      default: '',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: Number,
      default: -1,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:value', 'change'],
  setup(props, { emit }) {
    const focusColor = '#fd942b';
    const borderColor = ref('transparent');
    const text = ref(props.value || '');
    watch(
      () => props.value,
      (val) => {
        text.value = val;
      }
    );
    return {
      text,
      borderColor,
      onFocusin() {
        borderColor.value = focusColor;
      },
      onFocusout() {
        borderColor.value = 'transparent';
      },
      onBlur() {
        emit('update:value', text.value);
        emit('change', text.value);
      },
    };
  },
});
</script>

<style scoped lang="less">
@import '../common/ccui.less';
.cc-input {
  display: flex;
  flex: 1;

  .readonly {
    cursor: default;
    border-color: @readonly-border-color !important;
    color: @readonly-color !important;
  }

  .disabled {
    cursor: not-allowed;
    border-color: @disabled-border-color !important;
    color: @disabled-color !important;
    user-select: none !important;
  }

  input {
    border: 1px solid #171717;
    border-radius: 3px;
    margin: 0;
    padding: 0.17em 0.5em;
    width: 100%;
    display: inline-block;
    outline: none;
    background: #262626;
    font-size: 12px;
    height: 21px;
    box-sizing: border-box;
    color: #fd942b;

    &:hover {
      border-color: #888;
    }

    &:focus {
      border-color: #fd942b;
    }
  }
}
</style>
