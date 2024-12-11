<template>
  <div class="cc-color">
    <div ref="color" class="color" :class="{ disabled: disabled }" :style="style" @click.stop.prevent="onShowPanel">
      <div class="text" :style="{ color: textColor() }">
        {{ hexColor }}
      </div>
    </div>

    <div ref="panel" class="color-panel" v-show="show" @click.stop.prevent>
      <ColorSaturation ref="saturationComp" :color="hexColor" @change="onColorChangeSaturation"></ColorSaturation>
      <Hue class="board" title="" v-model:hue="hueValue" @change="onChangeColorHue"></Hue>
      <ColorInput title="HEX:" :disabled="disabled" v-model:color="hexColor" @change="onColorChangeHex" @focusin="onFocusin"></ColorInput>
      <div class="colors">
        <ColorCase class="color-item" @click.prevent.stop="onColorListSelect(item)" v-for="(item, index) in colorList" :key="index" :color="item"> </ColorCase>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { createPopper } from '@popperjs/core';
import colorIns from 'color';
import { computed, defineComponent, onMounted, onUnmounted, ref, toRaw, watch } from 'vue';
import Alpha from './alpha.vue';
import ColorCase from './color-case.vue';
import ColorInput from './color-input.vue';
import { emitter, HideOthers } from './event-bus';
import Hue from './hue.vue';
import ColorSaturation from './saturation.vue';
import { getColorHex, getColorHex8, getColorHSV, getColorHue, transformColorByHue } from './util';
export default defineComponent({
  name: 'CCColor',
  emits: ['update:color', 'change'],
  components: { ColorCase, ColorSaturation, ColorInput, Hue, Alpha },
  props: {
    color: { type: String, default: '#ff0000ff' },
    alpha: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    /**
     * 是否显示颜色值
     */
    showColorText: { type: Boolean, default: false },
  },
  setup(props, { emit }) {
    const show = ref(false);
    const hexColor = ref(props.color);
    const hueValue = ref(getColorHue(props.color));
    const style = computed(() => {
      return {
        backgroundColor: `${getColorHex(props.color)}`,
      };
    });

    watch(
      () => props.color,
      (val: string) => {
        hexColor.value = val;
      }
    );

    function updateBgColor() {
      const color = hexColor.value;
      const colorHex8 = getColorHex8(color);
      const colorHex = getColorHex(color);
      style.value.backgroundColor = `${colorHex8}`;
      emit('update:color', colorHex8);
      // 回调值(rgb,rgba)
      emit('change', colorHex, colorHex8);
    }

    const colorList = ref<Array<string>>(['#39352f', '#43aa05', '#cf2831', '#2297fe', '#dc50ff', '#ff6400', '#e6dcc8', '#f8b551']);
    const saturationComp = ref();
    const color = ref<HTMLElement>();
    const panel = ref<HTMLElement>();
    let popperInstance: any = null;
    const clickAnyWhereToClose = (event: MouseEvent) => {
      document.removeEventListener('click', clickAnyWhereToClose);
      show.value = false;
    };
    onMounted(() => {
      emitter.on(HideOthers, clickAnyWhereToClose);
    });
    onUnmounted(() => {
      emitter.off(HideOthers, clickAnyWhereToClose);
    });
    return {
      color,
      panel,
      saturationComp,
      colorList,
      hexColor,
      hueValue,
      style,
      show,
      textColor() {
        // return 'black';
        const r = toRaw(hexColor.value);
        const d = getColorHex(r);
        const c = colorIns(d);
        if (c.isLight()) {
          return '#000000';
        } else {
          return '#ffffff';
        }
      },
      onShowPanel() {
        if (props.disabled) {
          return;
        }
        if (show.value) {
          show.value = false;
          popperInstance?.destroy();
          document.removeEventListener('click', clickAnyWhereToClose);
        } else {
          emitter.emit(HideOthers);
          show.value = true;
          if (color.value && panel.value) {
            popperInstance = createPopper(color.value, panel.value, { placement: 'bottom-end' });
            hueValue.value = getColorHue(hexColor.value);
            saturationComp.value.updateBaseColor(hexColor.value);
          }
          document.addEventListener('click', clickAnyWhereToClose);
        }
      },
      onColorChangeSaturation(color: string) {
        // 颜色饱和度发生改变
        hexColor.value = getColorHex(color);
        updateBgColor();
      },
      onChangeColorHue(color: string) {
        // 色相发生改变
        const a = transformColorByHue(hexColor.value, hueValue.value);
        hexColor.value = getColorHex(a);
        saturationComp.value.updateBaseColor(hexColor.value);
        updateBgColor();
      },
      onColorChangeHex(color: string) {
        hexColor.value = getColorHex(color);
        hueValue.value = getColorHue(color);
        saturationComp.value.updateBaseColor(hexColor.value);
        updateBgColor();
      },
      onColorListSelect(color: string) {
        hexColor.value = getColorHex(color);
        hueValue.value = getColorHue(color);
        saturationComp.value.updateBaseColor(hexColor.value);
        updateBgColor();
        show.value = false;
      },

      onFocusin(event: FocusEvent) {
        (event.target as HTMLInputElement).select();
      },
    };
  },
});
</script>

<style scoped lang="less">
.cc-color {
  flex: 1;
  height: 20px;

  .disabled {
    border: 2px solid rgb(172, 172, 172) !important;
  }
  .color {
    width: 100%;
    height: 20px;
    cursor: pointer;
    border: 1px solid black;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    .text {
      margin-left: 2px;
      font-size: 12px;

      font-weight: bold;
    }
  }

  .color-panel {
    display: flex;
    flex-direction: column;
    background-color: white;
    position: absolute;
    z-index: 9999;
    width: 150px;
    height: 226px;
    border: 1px solid #575757;
    border-top: transparent;
    box-sizing: border-box;

    .board {
      border: 1px solid black;
      box-sizing: border-box;
      margin: 1px 0;
    }

    .colors {
      display: flex;
      flex-wrap: wrap;
      margin: 2px;

      .color-item {
        flex: 1;
      }
    }
  }
}
</style>
