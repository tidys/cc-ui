<template>
  <div class="table-body">
    <table style="border-spacing: 0;">
      <colgroup>
        <col v-for="(item, index) in widthInfo" :key="index" :width="item" />
      </colgroup>
      <thead>
        <tr v-for="(item, index) in data" :key="index">
          <CCTableLine :data="item.data"></CCTableLine>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, toRaw, watch } from 'vue';
import { LineData, TableData, TableColumn } from './const';
import CCTableLine from './line.vue';
export default defineComponent({
  name: 'cc-table-body',
  components: {
    CCTableLine
  },
  props: {
    widthInfo: {
      type: Array as PropType<number[]>,
      default: () => []
    },
    columns: {
      type: Array as PropType<TableColumn[]>,
      default: () => []
    },
    data: {
      type: Array as PropType<LineData[]>,
      default: () => []
    }
  },
  setup(props, ctx) {
    watch(
      () => props.widthInfo,
      v => {
        console.log(v);
      }
    );
    let widthArray: number[] = [];
    const columnsData = toRaw(props.columns);
    columnsData.map(item => {
      if (item.width) {
        widthArray.push(item.width);
      }
    });
    const widthInfo = ref<number[]>(widthArray);
    return {};
  }
});
</script>
<style lang="less" scoped>
.table-body {
}
</style>
