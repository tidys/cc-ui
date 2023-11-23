<template>
  <div class="cc-table">
    <CCTableBody :data="headLineData" :columns="columns"></CCTableBody>
    <CCTableBody :data="bodyLineData" :columns="columns"></CCTableBody>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, toRaw } from 'vue';
import { LineData, TableColumn, TableData } from './const';
import CCTableBody from './table-body.vue';
export default defineComponent({
  name: 'CCTable',
  components: {
    CCTableBody
  },
  props: {
    columns: {
      type: Array as PropType<TableColumn[]>,
      default: () => []
    },
    data: {
      type: Array as PropType<TableData[]>,
      default: () => []
    }
  },
  setup(props, ctx) {
    const { data, columns } = props;
    let rowCurrent = 0;
    let rowTotal =toRaw( data).length + 1;
    console.log(rowTotal)
    // head 数据
    let headLineData: LineData[] = [];
    const line: LineData = { index: 1, data: [] };
    headLineData.push(line);
    const columnsData = toRaw(columns);
    for (let i = 0; i < columnsData.length; i++) {
      const item = columnsData[i];
      line.data.push({
        columnIndexCurrent: i,
        columnIndexTotal: columnsData.length,
        rowIndexCurrent: rowCurrent++,
        rowIndexTotal: rowTotal,
        key: item.title,
        value: item.key
      });
    }

    // 收集body的行数据
    let bodyLineData: LineData[] = [];
    let index = 0;
    toRaw(data).map(item => {
      const keys = Object.keys(item);
      const line: LineData = { index: ++index, data: [] };
      bodyLineData.push(line);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (columnsData.find(item => item.key === key)) {
          line.data.push({
            columnIndexCurrent: i,
            columnIndexTotal: columnsData.length,
            rowIndexCurrent: rowCurrent++,
            rowIndexTotal: rowTotal,
            key: key,
            value: item[key]
          });
        } else {
          console.log(`invalid key: ${key}`);
        }
      }
    });
    return {
      bodyLineData,
      headLineData
    };
  }
});
</script>
<style lang="less">
.cc-table {
  margin: 3px;
  border: 1px solid black;
  border-radius: 3px;
}
</style>
