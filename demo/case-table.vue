<template>
  <div>
    <CCButton @confirm="changeTableData">change table[0] data</CCButton>
    <CCButton @confirm="changeTableColor">change table color</CCButton>
  </div>
  <CCTable class="myTable" @cell-context-menu="onCellContextMenu" @cell-click="onCellClick" :columns="tableColumns" :data="tableData" :color="tableColor" headColor="#888"></CCTable>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { TableColumn, TableData, CellData } from '../packages/cc-table/const';
import ccui from '../packages/index';
const { CCTable } = ccui.components;
export default defineComponent({
  name: 'case1',
  components: { CCTable },
  setup(props, ctx) {
    const tableColor = ref('1');
    const tableColumns = ref<TableColumn[]>([
      {
        title: 'name',
        key: 'name',
        width: 100,
      },
      {
        title: 'age',
        key: 'age',
        width: 50,
      },
      {
        title: 'address',
        key: 'address',
        breakChar: true,
      },
    ]);

    const _tableData: TableData[] = [];
    for (let i = 0; i < 10; i++) {
      _tableData.push({
        name: `${i}`,
        address: `${i}`,
        age: i,
      });
    }
    const tableData = ref<TableData[]>(
      _tableData.concat([
        {
          name: 'aaa aaaaaaaa sssssssssssssssssssssssssssss',
          address: '1dddddddddd ddddddddddddd ffffffffffffffff 666666666',
          age: 18,
        },
        {
          name: 'aaa',
          address: '1dddddddddddddddddddddddffffffffffffffff666666666',
          age: 18,
        },
      ])
    );
    onMounted(() => {
      setTimeout(() => {
        tableColor.value = '2';

        tableData.value.push({
          name: { value: 'add name', color: '#ff0000' },
          address: 'add address',
          age: 44,
        });
      }, 2000);
    });
    return {
      onCellClick(data: CellData) {
        console.log(data);
      },
      tableColumns,
      tableData,
      tableColor,
      onCellContextMenu(event: PointerEvent, data: CellData) {
        console.log(event, data);
        ccui.menu.showMenuByMouseEvent(event, [
          {
            name: 'test',
            callback: () => {
              console.log('test');
            },
          },
        ]);
      },
      changeTableData() {
        tableData.value[0].name = 'abc';
      },
      changeTableColor() {
        const len = tableData.value.length;
        tableData.value[len - 1].name.color = '#00ff00';
      },
    };
  },
});
</script>

<style scoped lang="less"></style>
