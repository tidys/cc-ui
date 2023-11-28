<template>
  <div
    class="cell cell-column cell-row"
    :class="{
      'cell-row-last': data.rowIndexCurrent + 1 >= data.rowIndexTotal,
      'cell-column-last': data.columnIndexCurrent + 1 >= data.columnIndexTotal,
      'cell-fixed': !!data.width,
      'cell-column-first': data.columnIndexCurrent === 0,
    }"
    :style="calcStyle()"
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
      default: () => {},
    },
  },
  setup(props, ctx) {
    const { data } = props;
    return {
      calcStyle() {
        if (data.width) {
          return `width:${data.width}px;min-width:${data.width}px;`;
        } else {
          return '';
        }
      },
    };
  },
});
</script>
<style lang="less" scoped>
.cell {
  min-height: 25px;
  width: 100%;
  font-weight: normal;
  overflow: hidden;
}
.cell-fixed {
  overflow: hidden;
  text-overflow: ellipsis;
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
