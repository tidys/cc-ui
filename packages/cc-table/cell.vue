<template>
  <div
    class="cell cell-column cell-row"
    :class="{
      'cell-row-last': data.rowIndexCurrent + 1 >= data.rowIndexTotal,
      'cell-column-last': data.columnIndexCurrent + 1 >= data.columnIndexTotal,
      'cell-column-first': data.columnIndexCurrent === 0
    }"
  >
    {{ data.value }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CellData } from './const';
export default defineComponent({
  name: 'cc-table-cell',
  props: {
    data: {
      type: Object as PropType<CellData>,
      default: () => {}
    }
  },
  setup(props, ctx) {
    return {};
  }
});
</script>
<style lang="less" scoped>
.cell {
  height: 25px;
}
.cell-column {
  border-right: 1px solid black;
}
.cell-row {
  border-bottom: 1px solid black;
}
.cell-row-last {
  border-bottom: 0 !important;
}

.cell-column-first {
  border-left: 0px !important;
}
.cell-column-last {
  border-right: 0px !important;
}
</style>
