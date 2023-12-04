<template>
  <div class="cc-table" ref="table" v-resize:throttle="onResize">
    <div :style="{ backgroundColor: `${headColor}` }" class="head">
      <CCTableBody :data="headLineData" :columns="columns" :isHeader="true"></CCTableBody>
    </div>
    <div class="body">
      <CCTableBody :data="bodyLineData" :columns="columns" :isHeader="false"></CCTableBody>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, toRaw, ref, onMounted, watch, watchEffect } from 'vue';
import { LineData, TableColumn, TableData } from './const';
// @ts-ignore
import resize from 'vue3-resize-directive';
import CCTableBody from './table-body.vue';
export default defineComponent({
  name: 'CCTable',
  directives: {
    resize,
  },
  components: {
    CCTableBody,
  },
  props: {
    columns: {
      type: Array as PropType<TableColumn[]>,
      default: () => [],
    },
    data: {
      type: Array as PropType<TableData[]>,
      default: () => [],
    },
    headColor: {
      type: String,
      default: '#666',
    },
  },
  setup(props, ctx) {
    const { data, columns } = props;
    const columnsData = toRaw(columns);
    // columns Data
    const columnsWidth = ref<number[]>([]);
    const table = ref();
    watch(
      () => props.data.length,
      (v) => {
        updateTableData(toRaw(props.data));
      }
    );
    watch(
      () => props.headColor,
      (v) => {}
    );
    function updateColumnsWidth() {
      if (table.value) {
        const el = table.value as HTMLDivElement;
        let leftWidth = el.clientWidth;
        columnsWidth.value.length = 0;
        for (let i = 0; i < columnsData.length; i++) {
          const item = columnsData[i];
          if (i + 1 >= columnsData.length) {
            // 最后一个
            columnsWidth.value.push(leftWidth);
          } else {
            const width = item.width || 100;
            leftWidth -= width;
            columnsWidth.value.push(width);
          }
        }
      }
    }
    onMounted(() => {
      updateColumnsWidth();
    });

    let headLineData = ref<LineData[]>([]);
    let bodyLineData = ref<LineData[]>([]);
    function updateTableData(tableData: TableData[]) {
      headLineData.value.length = 0;
      bodyLineData.value.length = 0;

      let rowCurrent = 0;
      let rowTotal = tableData.length + 1;
      // head 数据
      const line: LineData = { index: 1, data: [] };
      headLineData.value.push(line);
      for (let i = 0; i < columnsData.length; i++) {
        const item = columnsData[i];
        line.data.push({
          breakChar: item.breakChar,
          width: item.width,
          columnIndexCurrent: i,
          columnIndexTotal: columnsData.length,
          rowIndexCurrent: rowCurrent,
          rowIndexTotal: rowTotal,
          key: item.title,
          value: item.key,
        });
      }

      // 收集body的行数据
      let index = 0;
      tableData.map((item) => {
        rowCurrent++;
        const keys = Object.keys(item);
        const line: LineData = { index: ++index, data: [] };
        bodyLineData.value.push(line);
        // 需要安装column的顺序放到数组里面
        for (let i = 0; i < columnsData.length; i++) {
          const { title, key, width, breakChar } = columnsData[i];
          if (!item.hasOwnProperty(key)) {
            console.warn(item);
            console.warn(`invalid column data, not exist key: ${key}`);
          }
          line.data.push({
            breakChar,
            width: width,
            columnIndexCurrent: i,
            columnIndexTotal: columnsData.length,
            rowIndexCurrent: rowCurrent,
            rowIndexTotal: rowTotal,
            key: key,
            value: item[key],
          });
        }
      });
    }
    updateTableData(toRaw(data));
    return {
      onResize() {
        updateColumnsWidth();
      },
      table,
      columnsWidth,
      bodyLineData,
      headLineData,
    };
  },
});
</script>
<style lang="less">
.cc-table {
  box-sizing: border-box;
  overflow: hidden;
  margin: 0;
  border: 1px solid black;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  .head {
    display: flex;
    width: 100%;
  }
  .body {
    display: flex;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
  }

  .body::-webkit-scrollbar {
    width: 5px;
    height: 1px;
  }

  .body::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #d3d3d3;
  }

  .body::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #5e5e5e;
  }
}
</style>
