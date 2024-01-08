<template>
  <div ref="el" class="cc-button-group-item" :style="{ 'background-color': backgroundColor }" @mouseenter="onMouseEnter" @mouseover="onMouseOver" @mouseleave="onMouseLeave" :title="data.title" @click.stop.prevent="onClick" @mousedown.stop.prevent="onMouseDown" @mouseup.stop.prevent="onMouseUp">
    <div v-if="!!data.icon">
      <i class="iconfont" :class="data.icon"></i>
    </div>
    <div v-else-if="!!data.svg"></div>
    <div v-else-if="data.text !== undefined">
      {{ data.text || '' }}
    </div>
    <div v-else></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject, PropType, toRaw, ref, onMounted, onUnmounted } from 'vue';
import { ButtonGroupItem, ButtonState, ProvideKey, Msg } from './const';
import color from 'color';
import { TinyEmitter } from 'tiny-emitter';
export default defineComponent({
  name: 'CCButtonGroupItem',
  props: {
    data: {
      type: Object as PropType<ButtonGroupItem>,
      default: () => {},
    },
    color: {
      type: String,
      default: '#444',
    },
    recover: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, ctx) {
    const el = ref<HTMLElement>();
    const backgroundColor = ref(props.color);
    const bgColor = toRaw(props.color);
    const { data, recover } = props;
    let state: ButtonState = ButtonState.Normal;
    const colorPress = color(bgColor).lighten(1).hex();
    const colorEnter = color(bgColor).lighten(0.5).hex();
    const borderColor = '#222';
    const borderHoverColor = color(borderColor).lighten(3).hex();
    const onTap = () => {
      state = ButtonState.Normal;

      updateBgColor();
    };
    const emitter = inject(ProvideKey.Emitter) as TinyEmitter;
    const zIndexFunc = inject(ProvideKey.ZIndex) as () => number;
    onMounted(() => {
      emitter.on(Msg.ButtonTap, onTap);
    });
    onUnmounted(() => {
      emitter.off(Msg.ButtonTap, onTap);
    });
    function updateBgColor() {
      if (el && el.value) {
        const { style } = el.value as HTMLElement;
        style.zIndex = isHover ? '1' : '0';
      }

      if (state === ButtonState.Press) {
        backgroundColor.value = colorPress;
      } else if (state === ButtonState.Normal) {
        if (isHover) {
          backgroundColor.value = colorEnter;
        } else {
          backgroundColor.value = '';
        }
      }
    }
    let isHover = false;

    function updateBorderColor() {
      if (el) {
        const { style } = el.value as HTMLElement;
        style.borderColor = isHover ? borderHoverColor : borderColor;
        // style.zIndex = zIndexFunc().toString();
      }
    }
    return {
      el,
      backgroundColor,
      onMouseEnter(event: MouseEvent) {
        isHover = true;
        updateBorderColor();
        updateBgColor();
      },
      onMouseOver(event: MouseEvent) {},
      onMouseLeave(event: MouseEvent) {
        isHover = false;
        updateBorderColor();
        updateBgColor();
      },
      onClick(event: MouseEvent) {},
      onMouseDown(event: MouseEvent) {
        emitter.emit(Msg.ButtonTap);
        state = ButtonState.Press;
        updateBgColor();
        if (data && data.click) {
          data.click();
        }
      },
      onMouseUp(event: MouseEvent) {
        if (recover) {
          state = ButtonState.Normal;
        } else {
          state = ButtonState.Press;
        }
        updateBgColor();
      },
    };
  },
});
</script>
<style scoped lang="less">
@radius: 4px;
@border: 1px;
.cc-button-group-item {
  cursor: pointer;
  flex-basis: auto;
  margin-left: -@border;
  padding: 3px 8px;
  user-select: none;
  height: 20px;
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border: @border solid #222;
  &:first-child {
    border-top-left-radius: @radius;
    border-bottom-left-radius: @radius;
  }
  &:last-child {
    border-top-right-radius: @radius;
    border-bottom-right-radius: @radius;
  }
}
</style>
