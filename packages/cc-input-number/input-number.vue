<template>
  <div class="cc-input-number">
    <label>
      <input ref="input" v-model="val" type="number" @change="onChange" />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';

export default defineComponent({
  name: 'CCInputNumber',
  emits: ['change', 'update:value'],
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Number,
      required: true,
      default: 0,
    },
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
    step: {
      type: Number,
      default: 1,
    },
  },
  setup(props, { emit }) {
    const input = ref();
    let preVal = props.value;

    function checkVal(v: string | number): number {
      let result = v;
      if (typeof result === 'string') {
        result = preVal;
      }
      if (typeof result === 'number' && props.min !== undefined) {
        result = Math.max(props.min, result);
      }
      if (typeof result === 'number' && props.max !== undefined) {
        result = Math.min(props.max, result);
      }
      return result;
    }
    const val = ref(checkVal(parseFloat(props.value.toFixed(2).toString())));
    watch(
      () => props.value,
      () => {
        val.value = checkVal(parseFloat(props.value.toFixed(2).toString()));
      }
    );
    onMounted(() => {
      if (props.min !== undefined) {
        (input.value as Element).setAttribute('min', props.min.toString());
      }
      if (props.max !== undefined) {
        (input.value as Element).setAttribute('max', props.max.toString());
      }

      if (props.step !== undefined) {
        (input.value as Element).setAttribute('step', props.step.toString());
      }
    });
    return {
      val,
      input,
      onChange() {
        const result = checkVal(val.value);
        preVal = result;
        val.value = result;
        emit('update:value', result);
        emit('change', result);
      },
    };
  },
});
</script>

<style scoped lang="less">
.cc-input-number {
  display: flex;
  flex: 1;

  label {
    height: 100%;
    width: 100%;
    display: flex;

    input {
      height: 100%;
      width: 100%;
      outline: none;
      border: 1px solid #171717;
      margin: 0;
      box-sizing: border-box;
      border-radius: 3px;
      padding: 0.17em 0.5em;
      display: inline-block;
      background: #262626;
      font-size: 12px;
      color: #fd942b;

      &:hover {
        border-color: #888;
      }

      &:focus {
        border-color: #fd942b;
      }

      &::-webkit-inner-spin-button {
        // -webkit-appearance: none;
        // opacity: 1;
        // margin: 0;
        // padding: 0;
        // width: 12px;
        // height: 18px;
        // background-color: green;
      }
    }
  }
}
</style>
