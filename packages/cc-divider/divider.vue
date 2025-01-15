<template>
  <div ref="dividerEl" class="divider" :style="getCSS()" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @mousedown="onDividerMouseDown"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import COLOR from 'color';
import { uiElement } from '../element';

export default defineComponent({
  name: 'cc-divider',
  emits: ['move'],
  props: {
    vertical: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: '#444',
    },
    width: {
      type: Number,
      default: 3,
    },
    influence: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const lightColor = COLOR(props.color).lighten(0.6).hex();
    const hoverColor = COLOR(props.color).lighten(0.2).hex();
    const { vertical } = props;
    const isMove = ref(false);
    function parseStyle(el: HTMLElement, client: 'clientWidth' | 'clientHeight', style: 'width' | 'height') {
      // let styleSize = el.style[style];
      // if (!styleSize) {
      //   const dec = getComputedStyle(el);
      //   styleSize = dec[style];
      // }
      // if (styleSize) {
      //   if (styleSize.endsWith('px')) {
      //     return parseInt(styleSize.slice(0, -2));
      //   }
      // }
      // return el[client];
      return el.getBoundingClientRect()[style];
    }
    function onDividerMove(event: MouseEvent) {
      if (props.influence && dividerEl.value) {
        const el = dividerEl.value as HTMLElement;
        const el1: HTMLElement = el.previousElementSibling as HTMLElement;
        const el2: HTMLElement = el.nextElementSibling as HTMLElement;

        if (el1 && el2 && el && el.parentElement) {
          if (el.parentElement.style.display === 'flex') {
            // flex布局算法不一样
            el.parentElement.clientWidth;
            console.log('not support flex');
          } else {
            const opts: {
              offset: number;
              property: 'clientWidth' | 'clientHeight';
              minCss: 'minWidth' | 'minHeight';
              targetCss: 'width' | 'height';
            } = {
              offset: vertical ? event.movementX : event.movementY,
              property: vertical ? 'clientWidth' : 'clientHeight',
              minCss: vertical ? 'minWidth' : 'minHeight',
              targetCss: vertical ? 'width' : 'height',
            };
            do {
              const { offset, property, minCss, targetCss } = opts;
              if (offset === 0) {
                break;
              }
              let v1 = parseStyle(el1, property, targetCss) + offset;
              if (el1.style[minCss]) {
                const min1 = parseInt(el1.style[minCss]);
                if (v1 < min1) {
                  break;
                }
              }
              let v2 = parseStyle(el2, property, targetCss) - offset;
              if (el2.style[minCss]) {
                const min2 = parseInt(el2.style[minCss]);
                if (v2 < min2) {
                  break;
                }
              }

              [el1, el2].map((item) => {
                if (item.style.flexGrow) {
                  item.style.flexGrow = '';
                }
                if (item.style.flexShrink) {
                  item.style.flexShrink = '';
                }
              });
              el1.style[targetCss] = `${v1}px`;
              el2.style[targetCss] = `${v2}px`;
              break;
            } while (1);
          }
        }
      }
      emit('move', event);
    }
    const dividerEl = ref<HTMLElement>();
    const isHover = ref<boolean>(false);
    const doc = uiElement.getDoc();
    return {
      dividerEl,
      isMove,
      isHover,
      onMouseEnter() {
        isHover.value = true;
      },
      onMouseLeave() {
        isHover.value = false;
      },
      getCSS() {
        const { vertical, width, color } = props;
        let css: string[] = [];

        if (isMove.value) {
          css.push(`background-color:${lightColor}`);
        } else {
          if (isHover.value) {
            css.push(`background-color:${hoverColor}`);
          } else {
            css.push(`background-color:${color}`);
          }
        }
        if (vertical) {
          css.push(`cursor: ew-resize`);
          css.push(`width: ${width}px`);
          css.push(`height: 100%`);
        } else {
          css.push(`cursor: ns-resize`);
          css.push(`width: 100%`);
          css.push(`height: ${width}px`);
        }
        return css.join(';');
      },
      onDividerMouseDown(event: MouseEvent) {
        isMove.value = true;
        doc.addEventListener('mousemove', onDividerMove);
        function onMouseUp() {
          isMove.value = false;
          doc.removeEventListener('mouseup', onMouseUp);
          doc.removeEventListener('mousemove', onDividerMove);
        }
        doc.addEventListener('mouseup', onMouseUp);
      },
    };
  },
});
</script>

<style scoped lang="less">
.divider {
  user-select: none;
}
</style>
