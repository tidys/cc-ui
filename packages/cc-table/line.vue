<template>
  <div class="line" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" :style="{ 'background-color': bgColor }">
    <CCTableCell :placeholder="placeholder" v-for="(cell, index) in data" :key="index" :data="cell"></CCTableCell>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRaw, ref } from 'vue';
import { CellData, LineData } from './const';
import CCTableCell from './cell.vue';
import COLOR from 'color';
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
    const bgColor = ref(props.color);
    const lightColor = COLOR(props.color).lighten(0.6).hex();
    return {
      bgColor,
      onMouseEnter() {
        if (props.isHeader) return;
        bgColor.value = lightColor;
      },
      onMouseLeave() {
        if (props.isHeader) return;
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
