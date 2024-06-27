<template>
  <div class="app">
    <CCTree class="left" :value="uiListData" @node-click="onUiListClick"></CCTree>
    <CCDivider :vertical="true"></CCDivider>
    <div style="flex: 1">
      <component :is="userComp"></component>
    </div>
  </div>
  <CCDialog></CCDialog>
  <CCFootBar version="1.0"></CCFootBar>
  <CCCommand></CCCommand>
  <CCMenu></CCMenu>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, reactive } from 'vue';
import ccui from '../packages/index';
import { orderTest } from './order';
import { TableColumn, TableData } from '../packages/cc-table/const';
import { ITreeData } from '../packages/cc-tree/const';
import { CellData } from '../packages/cc-table/const';
import CaseSection from './case-section.vue';
import CaseProcess from './case-process.vue';
const { CCTree, CCDivider, CCButtonGroup, CCTable, CCProcess, CCCommand, CCColor, CCFootBar, CCButton, CCHelp, CCInputNumber, CCDialog, CCSection, CCSelect, CCProp, CCTextarea, CCInput, CCCheckBox, CCMenu, CCAd } = ccui.components;
export default defineComponent({
  name: 'app',
  components: { CCProcess, CCMenu, CCTree, CCDivider, CCButtonGroup, CCTable, CCCommand, CCFootBar, CCColor, CCButton, CCHelp, CCInputNumber, CCDialog, CCSection, CCSelect, CCProp, CCTextarea, CCInput, CCCheckBox, CCAd },
  setup() {
    const userComp = ref();
    const uiListData = ref<ITreeData[]>([
      { text: 'cc-section', userData: CaseSection },
      { text: 'cc-button' },
      { text: 'cc-button-group' },
      {
        text: 'cc-input',
      },
      {
        text: 'cc-select',
      },
      {
        text: 'cc-input-number',
      },
      {
        text: 'cc-textarea',
      },
      {
        text: 'cc-color',
      },
      {
        text: 'cc-ad',
      },
      {
        text: 'cc-table',
      },
      {
        text: 'cc-process',
        userData: CaseProcess,
      },
    ]);

    onMounted(() => {
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

    return {
      userComp,
      uiListData,
      onUiListClick(data: ITreeData) {
        console.log(data);
        if (data.userData) {
          userComp.value = data.userData;
        } else {
          userComp.value = null;
        }
      },

      onOrder() {
        orderTest();
      },
    };
  },
});
</script>
<style lang="less" scoped>
.app {
  display: flex;
  flex-direction: row;
  height: 100%;
  .left {
    min-width: 100px;
    height: 100%;
  }
  .myTable {
    width: 100%;
    flex: 1;
  }
}
</style>
