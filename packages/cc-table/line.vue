<template>
  <div class="line">
    <CCTableCell v-for="(cell, index) in data" :key="index" :data="cell"></CCTableCell>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CellData, LineData } from './const';
import CCTableCell from './cell.vue';
export default defineComponent({
  name: 'CCTableLine',
  components: {
    CCTableCell
  },
  props: {
    data: {
      type: Array as PropType<CellData[]>
    }
  },
  setup(props, ctx) {
    return {};
  }
});
</script>
<style lang="less" scoped>
.line {
  display: flex;
  flex-direction: row;
}
</style>
