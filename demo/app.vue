<template>
  <div class="app">
    <div class="content">
      <CCTree ref="treeEl" class="left" :search="true" :value="uiListData" @node-click="onUiListClick"></CCTree>
      <CCDivider :vertical="true"></CCDivider>
      <div class="right ccui-scrollbar">
        <component :is="userComp"></component>
      </div>
    </div>
    <CCFootBar version="1.0"></CCFootBar>
    <CCMenu></CCMenu>
    <CCDialog></CCDialog>
    <CCCommand></CCCommand>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, reactive, toRaw } from 'vue';
import ccui from '../packages/index';
import { orderTest } from './order';
import { TableColumn, TableData } from '../packages/cc-table/const';
import { ITreeData } from '../packages/cc-tree/const';
import { CellData } from '../packages/cc-table/const';
import CaseProcess from './case-process.vue';
import CaseAd from './case-ad.vue';
import CaseButtonGroup from './case-button-group.vue';
import CaseTable from './case-table.vue';
import CaseColor from './case-color.vue';
import CaseButton from './case-button.vue';
import CaseInputNumber from './case-input-number.vue';
import CaseSection from './case-section.vue';
import CaseSelect from './case-select.vue';
import CaseProp from './case-prop.vue';
import CaseTextarea from './case-textarea.vue';
import CaseInput from './case-input.vue';
import CaseCheckBox from './case-checkbox.vue';
import CaseDivider from './case-divider.vue';
import CaseIcon from './case-icon.vue';
import CaseOthers from './case-others.vue';
import CaseTree from './case-tree.vue';
import CaseDialog from './case-dialog.vue';
import CaseDock from './case-dock.vue';
import CaseMenu from './case-menu.vue';

const { CCTree, CCDivider, CCButtonGroup, CCTable, CCProcess, CCCommand, CCColor, CCFootBar, CCButton, CCHelp, CCInputNumber, CCDialog, CCSection, CCSelect, CCProp, CCTextarea, CCInput, CCCheckBox, CCMenu, CCAd } = ccui.components;
export default defineComponent({
  name: 'app',
  components: { CaseMenu, CCProcess, CCMenu, CCTree, CCDivider, CCButtonGroup, CCTable, CCCommand, CCFootBar, CCColor, CCButton, CCHelp, CCInputNumber, CCDialog, CCSection, CCSelect, CCProp, CCTextarea, CCInput, CCCheckBox, CCAd },
  setup() {
    const userComp = ref();
    const uiListData = ref<ITreeData[]>([
      { text: 'cc-ad', userData: CaseAd },
      { text: 'cc-button-group', userData: CaseButtonGroup }, //
      { text: 'cc-button', userData: CaseButton },
      { text: 'cc-checkbox', userData: CaseCheckBox },
      { text: 'cc-color', userData: CaseColor },
      { text: 'cc-divider', userData: CaseDivider },
      { text: 'cc-icon', userData: CaseIcon },
      { text: 'cc-input-number', userData: CaseInputNumber },
      { text: 'cc-input', userData: CaseInput },
      { text: 'cc-process', userData: CaseProcess },
      { text: 'cc-prop', userData: CaseProp },
      { text: 'cc-section', userData: CaseSection },
      { text: 'cc-select', userData: CaseSelect },
      { text: 'cc-table', userData: CaseTable },
      { text: 'cc-textarea', userData: CaseTextarea },
      { text: 'cc-tree', userData: CaseTree },
      { text: 'cc-dialog', userData: CaseDialog },
      { text: 'cc-menu', userData: CaseMenu },
      { text: 'others', userData: CaseOthers },
      { text: 'dock', userData: CaseDock },
    ]);
    const key = 'cc-ui.json';
    const data = JSON.parse(localStorage.getItem(key) || '{}');
    function save(idx: number) {
      data.idx = idx;
      localStorage.setItem(key, JSON.stringify(data));
    }
    const treeEl = ref();
    onMounted(() => {
      treeEl.value.handSelect(data.idx || 0);
    });

    return {
      treeEl,
      userComp,
      uiListData,
      onUiListClick(data: ITreeData) {
        if (data.userData) {
          userComp.value = data.userData;
          const index = toRaw(uiListData.value).findIndex((item) => item === data);
          save(index);
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
  flex-direction: column;
  height: 100%;
  .content {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    .left {
      min-width: 100px;
      height: 100%;
    }
  }
  .right {
    flex: 1;
    overflow: auto;
  }
}
</style>
