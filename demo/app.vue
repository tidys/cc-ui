<template>
  <div v-if="false">
    <CCButton tooltip="tooltip test">tooltip</CCButton>
    <CCInput :directory="true"></CCInput>
  </div>
  <div v-if="false">
    <div style="min-height: 20px; width: 100%; height: 50px; background-color: rgb(138, 138, 138)"></div>
    <CCDivider :vertical="false" color="#444"></CCDivider>
    <div style="min-height: 20px; width: 100%; height: 50px; background-color: rgb(214, 214, 214)"></div>
  </div>
  <div style="display: flex; flex-direction: row; height: 100px; width: 100%">
    <div style="min-width: 20px; flex: 1; height: 100%; background-color: rgb(138, 138, 138)"></div>
    <CCDivider :vertical="true" color="#444"></CCDivider>
    <div style="min-width: 20px; flex: 1; height: 100%; background-color: rgb(214, 214, 214)"></div>
  </div>
  <div v-if="false">
    <CCButtonGroup :recover="true" :items="buttonGroup"> </CCButtonGroup>
    <CCTable v-if="false" class="myTable" :columns="tableColumns" :data="tableData" :color="tableColor" headColor="#888"></CCTable>
    <div>
      <CCButton @click="onShowDialog">dialog</CCButton>
      <CCButton @click="onFootBar">footbar</CCButton>
      <CCDialog></CCDialog>
      <CCButton @click="onCommand">command</CCButton>
    </div>
    <div style="margin-left: 100px; display: flex; flex-direction: column">
      <CCColor></CCColor>
    </div>
    <div>
      <CCInputNumber :min="1" :value="-11"></CCInputNumber>
    </div>
    <div style="display: flex; flex-direction: column">
      <CCSection name="TEST">
        <template v-slot:header>
          <div style="display: flex; flex: 1; flex-direction: row; justify-content: flex-end">
            <CCButton>a</CCButton>
            <CCButton>b</CCButton>
          </div>
        </template>
        <div>
          <CCProp name="input" tooltip="测试tooltip">
            <CCInput @change="onChangeText" v-model:value="value"></CCInput>
          </CCProp>
          <CCProp name="disabled" tooltip="测试禁用">
            <CCInput :disabled="true" value="disabled"></CCInput>
          </CCProp>
          <CCProp name="readonly" tooltip="1111111 1111111111111111111111111111111111">
            <CCInput :readonly="true" value="readonly"></CCInput>
          </CCProp>
          <CCProp name="readonly && disabled" tooltip="test tooltip 1111111111111111111111144444444444444444444444444444444441111444444444444444444444444444444444444444444444444411111111111">
            <CCInput :disabled="true" :readonly="true" value="readonly"></CCInput>
          </CCProp>
          <CCProp name="test2">
            <CCSelect @change="onChangeSelect" :data="selectData" v-model:value="selectValue"> </CCSelect>
          </CCProp>
        </div>
      </CCSection>
      <CCSection :expand="false" name="测试折叠"> 默认不展开 </CCSection>
      <CCProp name="iconfont">
        <i class="iconfont icon_refresh"></i>
        <i class="iconfont icon_cmder"></i>
        <div class="iconfont icon_doc"></div>
      </CCProp>
      <CCProp name="color1">
        <CCColor></CCColor>
      </CCProp>
      <CCProp name="color2">
        <CCColor></CCColor>
      </CCProp>
      <CCProp name="input number">
        <CCInputNumber :value="1" :min="0"></CCInputNumber>
      </CCProp>
      <CCProp name="input number disabled">
        <CCInputNumber :value="2" :disabled="true"></CCInputNumber>
      </CCProp>
      <CCProp name="input number readonly">
        <CCInputNumber :value="2" :readonly="true"></CCInputNumber>
      </CCProp>
      <CCProp name="align-left" align="left">
        <CCCheckBox label="ok" :value="true"></CCCheckBox>
      </CCProp>
      <CCProp name="align-right" align="right">
        <CCCheckBox label="ok" :value="true"></CCCheckBox>
      </CCProp>
      <div style="height: 100px"></div>
      <CCProp name="textarea">
        <CCTextarea data="111" @change="onChangeTextarea"></CCTextarea>
      </CCProp>
    </div>
    <div style="flex: 1"></div>
    <CCCommand></CCCommand>
    <CCFootBar version="1.0"></CCFootBar>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import ccui from '../packages/index';
import { orderTest } from './order';
import { DialogUrlData, DialogOptions } from '../packages/cc-dialog/const';
import { IUiMenuItem } from '../packages/cc-menu/const';
import { TableColumn, TableData } from '../packages/cc-table/const';
import { ButtonGroupItem } from '../packages/cc-button-group/const';
const { CCDivider, CCButtonGroup, CCTable, CCCommand, CCColor, CCFootBar, CCButton, CCHelp, CCInputNumber, CCDialog, CCSection, CCSelect, CCProp, CCTextarea, CCInput, CCCheckBox } = ccui.components;
export default defineComponent({
  name: 'app',
  components: { CCDivider, CCButtonGroup, CCTable, CCCommand, CCFootBar, CCColor, CCButton, CCHelp, CCInputNumber, CCDialog, CCSection, CCSelect, CCProp, CCTextarea, CCInput, CCCheckBox },
  setup() {
    const value = ref('123');
    const selectData = ref([
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
    ]);
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
    const selectValue = ref('1');
    const tableColor = ref('1');
    onMounted(() => {
      setTimeout(() => {
        value.value = '456';
        selectValue.value = '3';
        selectData.value.push({ label: '4', value: 4 });
        tableColor.value = '2';
        tableData.value.push({ name: 'd', address: '1', age: 44 });
      }, 1000);
      ccui.footbar.registerCmd({
        label: 'cmd1',
        icon: 'cmder',
        cmds: [
          {
            label: '1111111111111111 111111111111111',
            icon: 'cmder',
            cb: () => {
              console.log(1);
            },
          },
          {
            label: '2222222222222',
            icon: 'cmder',
            visible: false,
            cb: () => {
              console.log(2);
            },
          },
          {
            label: '333 333 333 333 333 333 333 333 333 333 333',
            icon: 'cmder',
            cb: () => {
              console.log(1);
            },
          },
        ],
      });
    });
    const buttonGroupData: ButtonGroupItem[] = [
      {
        text: '1',
        title: '1',
        icon: 'icon_move',
      },
      {
        icon: 'icon_up_right_arrow',
      },
      {
        icon: 'icon_resize',
      },
      {
        icon: 'icon_magic',
      },
      {
        icon: 'icon_book',
      },
    ];
    if (false) {
      for (let i = 0; i < 4; i++) {
        buttonGroupData.push({
          text: `text text text text${i}`,
          title: `title${i}`,
          click() {
            console.log(i);
          },
        });
      }
    }
    const buttonGroup = ref<ButtonGroupItem[]>(buttonGroupData);
    return {
      buttonGroup,
      tableColumns,
      tableData,
      tableColor,
      onOrder() {
        orderTest();
      },
      onFootBar() {
        ccui.footbar.ShowTips('11');
      },
      onMenu(event: MouseEvent) {
        const menus: IUiMenuItem[] = [];
        for (let i = 0; i < 20; i++) {
          menus.push({
            name: i.toString(),
            callback: () => {
              console.log('hello');
            },
          });
        }
        ccui.menu.showMenuByMouseEvent(event, menus);
      },
      onShowDialog() {
        const data: DialogUrlData = new DialogUrlData();
        data.url = 'http://www.cocos.com';
        data.label = '访问{cocos}官网';
        data.jump = 4;
        const opts: DialogOptions = { data };
        ccui.dialog.showDialog(opts);
      },
      selectData,
      selectValue,
      value,
      onChangeText() {
        console.log(value.value);
      },
      onChangeSelect() {
        console.log(selectValue.value);
      },
      onChangeTextarea(v: string) {
        console.log(v);
      },
      onCommand() {
        ccui.command.showCommand([
          {
            label: '1',
            cb: () => {
              console.log('1');
            },
          },
          {
            label: '2',
            cb: () => {
              console.log('2');
            },
          },
        ]);
      },
    };
  },
});
</script>
<style lang="less">
#app {
  display: flex;
  flex-direction: column;
  .myTable {
    width: 100%;
    flex: 1;
  }
}

body {
  overflow: hidden;
}
</style>
