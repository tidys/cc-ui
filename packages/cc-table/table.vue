<template>
  <div class="cc-table" ref="table" v-resize:throttle="onResize">
    <CCTableBody :data="headLineData" :columns="columns" :widthInfo="columnsWidth"></CCTableBody>
    <CCTableBody :data="bodyLineData" :columns="columns" :widthInfo="columnsWidth"></CCTableBody>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, toRaw, ref, onMounted } from 'vue';
import { LineData, TableColumn, TableData } from './const';
// @ts-ignore
import resize from 'vue3-resize-directive';
import CCTableBody from './table-body.vue';
export default defineComponent({
  name: 'CCTable',
  directives: {
    resize
  },
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
    const columnsData = toRaw(columns);
    // columns Data
    const columnsWidth = ref<number[]>([]);
    const table = ref();

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

    let rowCurrent = 0;
    let rowTotal = toRaw(data).length + 1;
    // head 数据
    let headLineData: LineData[] = [];
    const line: LineData = { index: 1, data: [] };
    headLineData.push(line);
    for (let i = 0; i < columnsData.length; i++) {
      const item = columnsData[i];
      line.data.push({
        columnIndexCurrent: i,
        columnIndexTotal: columnsData.length,
        rowIndexCurrent: rowCurrent,
        rowIndexTotal: rowTotal,
        key: item.title,
        value: item.key
      });
    }

    // 收集body的行数据
    let bodyLineData: LineData[] = [];
    let index = 0;
    toRaw(data).map(item => {
      rowCurrent++;
      const keys = Object.keys(item);
      const line: LineData = { index: ++index, data: [] };
      bodyLineData.push(line);
      // 需要安装column的顺序放到数组里面
      for (let i = 0; i < columnsData.length; i++) {
        const { title, key } = columnsData[i];
        if (!item.hasOwnProperty(key)) {
          console.warn(item);
          console.warn(`invalid column data, not exist key: ${key}`);
        }
        line.data.push({
          columnIndexCurrent: i,
          columnIndexTotal: columnsData.length,
          rowIndexCurrent: rowCurrent,
          rowIndexTotal: rowTotal,
          key: key,
          value: item[key]
        });
      }
    });
    return {
      onResize() {
        updateColumnsWidth();
      },
      table,
      columnsWidth,
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
