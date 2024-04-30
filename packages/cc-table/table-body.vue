<template>
  <div class="table-body">
    <CCTableLine :color="color" :is-header="isHeader" v-for="(item, index) in data" :key="index" :data="item.data"></CCTableLine>
    <CCTableLine :color="color" :is-header="isHeader" :placeholder="true" class="last" v-if="!isHeader && !!data.length" key="last" :data="data[data.length - 1].data"></CCTableLine>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, toRaw, watch } from 'vue';
import { LineData, TableData, TableColumn } from './const';
import CCTableLine from './line.vue';
export default defineComponent({
  name: 'cc-table-body',
  components: {
    CCTableLine,
  },
  props: {
    isHeader: {
      type: Boolean,
      default: false,
    },
    columns: {
      type: Array as PropType<TableColumn[]>,
      default: () => [],
    },
    data: {
      type: Array as PropType<LineData[]>,
      default: () => [],
    },
    color: {
      type: String,
      default: '#444',
    },
  },
  setup(props, ctx) {
    let widthArray: number[] = [];
    const columnsData = toRaw(props.columns);
    columnsData.map((item) => {
      if (item.width) {
        widthArray.push(item.width);
      }
    });
    return {};
  },
});
</script>
<style lang="less" scoped>
.table-body {
  display: flex;
  width: 100%;
  flex-direction: column;
  .last {
    flex: 1;
  }
}
</style>
