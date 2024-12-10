<template>
  <div class="cc-prop" @mouseenter="isHove = true" @mouseleave="isHove = false">
    <div v-show="isShowTips && tooltip" ref="tips" class="tips">
      <div ref="tooltipElement" class="text">{{ tooltip }}</div>
      <div ref="arrow" data-popper-arrow class="arrow"></div>
    </div>
    <div class="icon" :class="{ 'color-blue': isHove }">
      <i class="arrow" :class="getArrowClass()" @click="onClickArrow"> </i>
    </div>
    <div class="name" @mouseenter="onHover" @mouseleave="onOver">
      <span :class="{ hit: hint, 'color-blue': isHove }" ref="text">{{ name }}</span>
    </div>
    <div class="value" :style="getValueStyle()">
      <slot style="flex: 1"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { createPopper } from '@popperjs/core';
import { debounce, DebouncedFunc } from 'lodash';
import { defineComponent, onMounted, ref, toRaw, watch } from 'vue';

export default defineComponent({
  name: 'CCProp',
  emits: ['changeExpand', 'update:expand'],
  props: {
    name: {
      type: String,
    },
    tooltip: {
      type: String,
      default: '',
    },
    align: {
      type: String,
      default: 'center',
    },
    /**
     * 属性是否展开，主要是针对 Object/Array 设计的
     */
    expand: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否显示箭头，主要是针对 Object/Array 设计的
     */
    arrow: {
      type: Boolean,
      default: false,
    },
    /**
     * 当为true时，prop.name背景将会带颜色
     */
    hint: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    onMounted(() => {});
    const name = ref(props.name || '');
    const isHove = ref(false);
    const tips = ref<HTMLElement>();
    const arrow = ref<HTMLElement>();
    const isShowTips = ref(false);
    let popperInstance: any = null;

    function showTipsFunc(target: any) {
      const tooltip: string = toRaw(props.tooltip);
      if (tooltip && tips.value) {
        const el = toRaw(tooltipElement.value) as HTMLElement;
        if (el && (tooltip.indexOf('<br>') !== -1 || tooltip.indexOf('<br/>') !== -1)) {
          el.innerHTML = tooltip;
        }
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
    const tooltipElement = ref<HTMLElement>();
    let timer: any = null;
    const text = ref<HTMLElement>();
    const isExpand = ref(props.expand);
    watch(
      () => props.expand,
      (val) => {
        const v = toRaw(val);
        isExpand.value = v;
        emit('changeExpand', v);
      }
    );
    return {
      tooltipElement,
      tips,
      isShowTips,
      arrow,
      isExpand,
      text,
      name,
      isHove,
      getArrowClass() {
        const cls = [];
        if (props.arrow) {
          cls.push('arrow-visible');
        } else {
          cls.push('arrow-hidden');
        }
        if (isExpand.value) {
          cls.push('iconfont icon_arrow_down');
        } else {
          cls.push('iconfont icon_arrow_right');
        }
        return cls.join(' ');
      },
      onHover(event: any) {
        if (props.tooltip) {
          clearTimeout(timer);
          timer = setTimeout(() => {
            showTipsFunc(text.value);
          }, 600);
        }
      },
      onClickArrow() {
        const v = !toRaw(isExpand.value);
        isExpand.value = v;
        emit('update:expand', v);
      },
      onOver() {
        if (props.tooltip) {
          clearTimeout(timer);
          isShowTips.value = false;
          popperInstance?.destroy();
          popperInstance = null;
        }
      },
      getValueStyle() {
        let align = 'center';
        if (props.align === 'center') {
          align = 'center';
        } else if (props.align === 'left') {
          align = 'flex-start';
        } else if (props.align === 'right') {
          align = 'flex-end';
        }
        const css = `justify-content: ${align};`;
        return css;
      },
    };
  },
});
</script>

<style scoped lang="less">
@hit-color: rgb(201, 9, 99);
.cc-prop {
  display: flex;
  width: 100%;
  min-height: 26px;
  flex-direction: row;
  justify-content: center;
  margin: 2px 0;
  //overflow: hidden;
  .icon {
    padding-top: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    .arrow-hidden {
      visibility: hidden;
    }
    .arrow-visible {
      visibility: visible;
    }
    .arrow {
      font-size: 15px;
      line-height: 15px;
      cursor: pointer;
      &:hover {
        color: rgb(121, 202, 255) !important;
      }
      &:active {
        color: #fd942b !important;
      }
    }
  }
  .name {
    box-sizing: border-box;
    min-height: 26px;
    height: 100%;
    user-select: none;
    flex-direction: row;
    justify-content: left;
    display: flex;
    align-items: center;
    width: 35%;
    min-width: 35%;
    .hit {
      border: solid 2px @hit-color;
      background-color: @hit-color;
      border-radius: 4px;
    }
    span {
      border: solid 2px transparent;
      background-color: transparent;
      border-radius: 4px;
      padding: 2px 2px;
      color: #bdbdbd;
      display: block;
      font-size: 12px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

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

  .color-blue {
    color: #09f !important;
  }

  .value {
    overflow: hidden;
    display: flex;
    flex: 1;
    align-items: center;
  }
}
</style>
