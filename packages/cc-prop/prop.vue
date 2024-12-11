<template>
  <div class="cc-prop" @mouseenter="isHove = true" @mouseleave="isHove = false">
    <div class="header" :style="{ width: headWidth }">
      <div v-show="isShowTips && tooltip" ref="tips" class="tips">
        <div ref="tooltipElement" class="text">{{ tooltip }}</div>
        <div ref="arrow" data-popper-arrow class="arrow"></div>
      </div>
      <div class="indent" :style="{ width: indent + 'px' }"></div>
      <div class="icon" v-if="icon" :class="{ 'color-blue': isHove }">
        <i class="arrow" :class="getArrowClass()" @click="onClickArrow"> </i>
      </div>
      <div class="name" :class="{ 'name-slide': slide }" @mouseenter="onHover" @mouseleave="onOver" @mousedown="onMouseDown">
        <span :title="title" :class="{ hit: hint, 'color-blue': isHove }" ref="text">{{ name }}</span>
      </div>
    </div>
    <div class="value" :style="getValueStyle()">
      <slot style="flex: 1"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { createPopper } from '@popperjs/core';
import { debounce, DebouncedFunc } from 'lodash';
import { TinyEmitter } from 'tiny-emitter';
import { defineComponent, inject, nextTick, onMounted, provide, ref, toRaw, watch } from 'vue';

export default defineComponent({
  name: 'CCProp',
  emits: ['changeExpand', 'update:expand', 'slide'],
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
     * 是否显示icon
     * false:不显示，并且不会占用icon的空间，主要事针对Vec2/Vec3/Vec4设计的
     */
    icon: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否显示箭头，无论是否显示都会占用空间，主要是针对 Object/Array 设计的
     */
    arrow: {
      type: Boolean,
      default: false,
    },
    /**
     * slide操作的步进
     */
    step: {
      type: Number,
      default: 1,
    },
    /**
     * 在属性名字是否可以滑动，主要是方便用来触发value的step操作
     *
     * @example
     * ```ts
     * // 子组件需要如下对接slide行为
     * const emitter: TinyEmitter = inject<TinyEmitter>('emitter', new TinyEmitter());
     * emitter.on('slide', (n:number) => {
     *    console.log(n);
     * });
     * ```
     */
    slide: {
      type: Boolean,
      default: false,
    },
    /**
     * 缩进
     */
    indent: {
      type: Number,
      default: 0,
    },
    /**
     * 当为true时，prop.name背景将会带颜色
     */
    hint: {
      type: Boolean,
      default: false,
    },

    /**
     * 属性名字的width样式，方便控制长度
     *
     * 默认为固定长度200px，如果要自动长度，可以设置为auto
     */
    headWidth: {
      type: String,
      default: '200px',
    },
  },
  setup(props, { emit }) {
    onMounted(() => {
      updateTitle();
    });
    const name = ref(props.name || '');
    const isHove = ref(false);
    const tips = ref<HTMLElement>();
    const arrow = ref<HTMLElement>();
    const isShowTips = ref(false);
    let popperInstance: any = null;
    const emitter = new TinyEmitter();
    provide('emitter', emitter);
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
    let clientX: number = 0;
    function _onMouseUp(event: MouseEvent) {
      document.removeEventListener('mousemove', _onMouseMove);
      document.removeEventListener('mouseup', _onMouseUp);
      document.removeEventListener('onselectstart', _onSelect);
    }
    function _onMouseMove(event: MouseEvent) {
      // 防止频繁触发
      if (Math.abs(clientX - event.clientX) < 10) {
        return;
      }
      let calcStep = Math.abs(props.step || 0);
      if (event.clientX > clientX) {
        calcStep = calcStep;
      } else {
        calcStep = -calcStep;
      }
      emit('slide', calcStep);
      clientX = event.clientX;
      emitter.emit('slide', calcStep);
    }
    function _onSelect() {
      return false;
    }
    const title = ref<string>('');
    function updateTitle() {
      if (text.value) {
        const el = text.value as HTMLElement;
        if (el.clientWidth < el.scrollWidth) {
          title.value = props.name || '';
        } else {
          title.value = '';
        }
      }
    }
    watch(
      () => props.name,
      (val) => {
        title.value = val || '';
      }
    );
    return {
      title,
      tooltipElement,
      tips,
      isShowTips,
      arrow,
      isExpand,
      text,
      name,
      isHove,
      onMouseDown(event: MouseEvent) {
        if (!props.slide) {
          return;
        }
        clientX = event.clientX;
        document.addEventListener('mousemove', _onMouseMove);
        document.addEventListener('mouseup', _onMouseUp);
        document.addEventListener('onselectstart', _onSelect);
      },
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
  .header {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    min-width: 40px;
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
    .name-slide {
      cursor: ew-resize;
    }
    .name {
      flex: 1;
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
  }
  .value {
    overflow: hidden;
    min-width: 60px;
    width: 50%;
    display: flex;
    flex: 1;
    align-items: center;
  }
}
</style>
