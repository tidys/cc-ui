<template>
  <div class="btn" ref="text" :style="{ background: `${theme.background}` }" @mouseup="onMouseup" @mousedown="onMousedown" @mouseenter="onMouseenter" @mouseleave="onMouseleave" :class="{ click: isClick }">
    <div v-show="isShowTips && tooltip" ref="tips" class="tips">
      <div class="text">{{ tooltip }}</div>
      <div ref="arrow" data-popper-arrow class="arrow"></div>
    </div>
    <div class="text">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { Transition } from './transition';
import { createPopper } from '@popperjs/core';

export default defineComponent({
  name: 'CCButton',
  props: {
    transition: {
      type: String,
      default: 'color',
      validator: (value) => {
        return !!['color', 'sprite'].find((el) => el === value);
      },
    },
    color: {
      type: String,
    },
    texture: {
      type: String,
    },
    tooltip: {
      type: String,
      default: '',
    },
  },
  emits: [],
  setup(props: any, { emit }) {
    const isClick = ref(false);
    const isHover = ref(false);
    const transition = new Transition(props.transition, props);
    const isShowTips = ref(false);
    const tips = ref<HTMLDivElement>();
    let timer: any = null;
    let popperInstance: any = null;
    function showTipsFunc(target: any) {
      if (props.tooltip && tips.value) {
        isShowTips.value = true;
        popperInstance = createPopper(target, tips.value, {
          placement: 'top-start',
          modifiers: [
            {
              name: 'arrow',
              options: {
                element: arrow.value,
                padding: 6, // popper带有圆角时，不希望箭头移动到圆角
              },
            },
            {
              name: 'offset',
              options: {
                offset: [5, 5],
              },
            },
          ],
        });
      }
    }
    const arrow = ref<HTMLElement>();
    const text = ref<HTMLElement>();

    return {
      arrow,
      text,
      tips,
      isShowTips,
      theme: transition.theme,
      isClick,
      onHover(event: any) {},
      onMouseup() {
        isClick.value = false;
        transition.onMouseup();
      },
      onMousedown() {
        isClick.value = true;
        transition.onMousedown();
      },
      onMouseenter() {
        if (props.tooltip) {
          clearTimeout(timer);
          timer = setTimeout(() => {
            showTipsFunc(text.value);
          }, 600);
        }
        isHover.value = true;
        transition.onMouseenter();
      },
      onMouseleave() {
        if (props.tooltip) {
          clearTimeout(timer);
          isShowTips.value = false;
          popperInstance?.destroy();
          popperInstance = null;
        }
        isHover.value = false;
        transition.onMouseleave();
      },
    };
  },
});
</script>

<style scoped lang="less">
.btn {
  box-sizing: border-box;
  min-width: 10px;
  height: 26px;
  border: 1px solid #171717;
  border-radius: 5px;
  font-family: -apple-system;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 1px;
  cursor: pointer;

  .tips {
    .text {
      background-color: #666666;
      border-radius: 6px;
      user-select: none;
      padding: 3px 9px;
      max-width: 200px;
      word-break: break-all;
    }

    .arrow {
      z-index: -1;

      &:before {
        display: block;
        content: '';
        transform: rotate(45deg);
        background-color: #666666;
        width: 10px;
        height: 10px;
      }
    }
  }

  .tips[data-popper-placement^='top'] {
    .arrow {
      bottom: -5px;
    }
  }

  .tips[data-popper-placement^='bottom'] {
    .arrow {
      top: -5px;
    }
  }

  .tips[data-popper-placement^='left'] {
    .arrow {
      right: -5px;
    }
  }

  .tips[data-popper-placement^='right'] {
    .arrow {
      left: -5px;
    }
  }
  .text {
    padding: 0 18px;
    user-select: none;
    color: white;
    font: 12px bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
  }
}

.click {
  border-color: #fd942b;
}
</style>
