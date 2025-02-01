<template>
  <div class="cc-input" @mouseenter="hover = true" @mouseleave="hover = false">
    <label class="content">
      <input :placeholder="placeholder" @focusout="onFocusout" :style="getCSS()" :class="{ readonly: readonly, disabled: disabled }" @focusin="onFocusin" @blur="onBlur" @input="onInput" :readonly="readonly" :maxlength="maxlength" :disabled="disabled" v-model="text" type="text" />
      <i v-if="!readonly && !disabled && hover" @click.stop.prevent="onClean" class="iconfont icon_close close"></i>
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
    /**
     * input的值是否为目录
     */
    directory: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  emits: ['update:value', 'change', 'input'],
  setup(props, { emit }) {
    const focusColor = '#fd942b';
    const borderColor = ref('transparent');
    const text = ref(props.value || '');
    watch(
      () => props.value,
      (val) => {
        if (text.value !== val) {
          text.value = val;
          emit('change', text.value);
        }
      }
    );
    const hover = ref(false);
    return {
      hover,
      text,
      borderColor,
      getCSS() {
        const css: string[] = [];
        if (props.directory) {
          css.push(`cursor: pointer !important`);
        }
        return css.join(';');
      },
      onInput() {
        emit('update:value', text.value);
        emit('input', text.value);
      },
      onFocusin(event: FocusEvent) {
        borderColor.value = focusColor;
        (event.target as HTMLInputElement).select();
      },
      onClean() {
        if (text.value === '') {
          return;
        }
        text.value = '';
        emit('update:value', text.value);
        emit('change', text.value);
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
  align-items: center;
  .content {
    display: flex;
    flex: 1;
    position: relative;
    .close {
      cursor: pointer;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      display: flex;
      color: rgb(179, 179, 179);
      align-items: center;
      background-color: rgba(0, 44, 220, 0.551);
      &:hover {
        color: white;
        background-color: rgb(22, 69, 255);
      }
      &:active {
        color: #fd942b;
      }
    }
  }
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
