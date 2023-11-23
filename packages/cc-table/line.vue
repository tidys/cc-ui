<template>
  <th v-for="(cell, index) in data" :key="index" style="padding: 0px;">
    <CCTableCell :data="cell"></CCTableCell>
  </th>
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
<style lang="less" scoped></style>
