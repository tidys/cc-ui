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
    @click="onClick"
    @contextmenu.stop.prevent="onContextMenu"
  >
    {{ placeholder ? '' : data.value }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, inject, toRaw } from 'vue';
import { CellData } from './const';
import { ProvideMsg } from './const';
import COLOR from 'color';
export default defineComponent({
  name: 'cc-table-cell',
  props: {
    data: {
      type: Object as PropType<CellData>,
      default: () => {},
    },
    placeholder: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const cellClick = inject(ProvideMsg.CellClick, (data: CellData) => {});
    const cellContextMenu = inject(ProvideMsg.CellContextMenu, (event: MouseEvent, data: CellData) => {});
    const { placeholder } = props;
    return {
      onClick() {
        cellClick(toRaw(props.data));
      },
      onContextMenu(event: MouseEvent) {
        cellContextMenu(event, toRaw(props.data));
      },
      calcStyle() {
        let css = '';
        if (props.data.breakChar === true) {
          css += 'word-break: break-all;';
        }
        if (!placeholder) {
          css += 'min-height:25px;';
        }
        if (props.data.width) {
          css += `width:${props.data.width}px;min-width:${props.data.width}px;`;
        }
        if (props.data.bgColor) {
          css += `background-color:${props.data.bgColor};`;
        }
        if (props.data.textColor) {
          css += `color:${props.data.textColor};`;
        }
        return css;
      },
    };
  },
});
</script>
<style lang="less" scoped>
.cell {
  width: 100%;
  font-weight: normal;
  overflow: hidden;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
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
