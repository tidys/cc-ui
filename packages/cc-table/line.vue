<template>
  <div class="line" @click="onClick" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" :style="{ 'background-color': bgColor }">
    <CCTableCell :placeholder="placeholder" v-for="(cell, index) in data" :key="index" :data="cell"></CCTableCell>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRaw, ref, onMounted, onUnmounted } from 'vue';
import { CellData, LineData } from './const';
import CCTableCell from './cell.vue';
import COLOR from 'color';
import { eventBus } from './eventBus';
import { EventMsg } from './const';
export default defineComponent({
  name: 'CCTableLine',
  components: {
    CCTableCell,
  },
  props: {
    data: {
      type: Array as PropType<CellData[]>,
    },
    placeholder: {
      type: Boolean,
      default: false,
    },
    isHeader: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '#444',
    },
  },
  setup(props, { emit }) {
    function onSelected(line: CellData[]) {
      isSelected = props.data === line;
      bgColor.value = isSelected ? selectColor : props.color;
    }
    onMounted(() => {
      eventBus.on(EventMsg.SelectLine, onSelected);
    });
    onUnmounted(() => {
      eventBus.off(EventMsg.SelectLine, onSelected);
    });
    const bgColor = ref(props.color);
    const hoverColor = COLOR(props.color).lighten(0.2).hex();
    const selectColor = COLOR(props.color).lighten(0.6).hex();
    let isSelected = false;
    return {
      bgColor,
      onClick() {
        if (props.isHeader) {
          eventBus.emit(EventMsg.SelectLine, []);
        } else {
          eventBus.emit(EventMsg.SelectLine, props.data);
        }
      },
      onMouseEnter() {
        if (props.isHeader || isSelected) return;
        bgColor.value = hoverColor;
      },
      onMouseLeave() {
        if (props.isHeader || isSelected) return;
        bgColor.value = props.color;
      },
    };
  },
});
</script>
<style lang="less" scoped>
.line {
  display: flex;
  flex-direction: row;
}
</style>
