<template>
  <div>
    <CCSection name="基础测试">
      <CCTree style="max-height: 100px" :value="treeData1" @node-menu="onTreeNodeMenu" @node-click="onTreeNodeClick" @node-expand="onTreeNodeExpend" @node-collapse="onTreeNodeCollapsed" @node-enter="onTreeNodeEnter" @node-leave="onTreeNodeLeave"></CCTree>
    </CCSection>
    <CCSection name="expand keys">
      <CCTree style="max-height: 100px; min-height: 100px" :default-expand-all="false" :expand-keys="expandKeys" :value="treeData2"></CCTree>
      <div>
        <CCButton @click="freshTree1">should expand 1</CCButton>
        <CCButton @click="freshTree2">should fold 11</CCButton>
      </div>
    </CCSection>

    <CCSection name="handExpand">
      <CCTree ref="tree3El" style="max-height: 100px; min-height: 100px" :default-expand-all="false" :value="treeData3"></CCTree>
      <div>
        <div style="display: flex; flex-direction: row">
          <CCInputNumber :value="key" @change="onChangeKey"></CCInputNumber>
          <CCCheckBox v-model:value="isSelect" label="select"></CCCheckBox>
          <CCCheckBox v-model:value="isScroll" label="scroll"></CCCheckBox>
          <CCCheckBox v-model:value="isHighlight" label="highlight"></CCCheckBox>
          <CCButton @click="expandTest">test expand</CCButton>
        </div>
        <CCButton @click="updateSelect('2')">select 2</CCButton>
        <CCButton @click="updateSelect('100')">select 100</CCButton>
      </div>
    </CCSection>
    <CCSection name="search">
      <CCProp name="test">
        <CCButton @click="onChangeTreeData4">change tree</CCButton>
        <CCButton @click="onSearchFocus">search focus</CCButton>
      </CCProp>
      <CCTree ref="tree4" :show-icon="true" :value="treeData4" style="max-height: 300px; min-height: 300px" :search="true"></CCTree>
    </CCSection>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from 'vue';
import { HandExpandOptions, ITreeData } from '../packages/cc-tree/const';
import ccui from '../packages/index';

const { CCTree, CCButton, CCInputNumber, CCSection, CCProp, CCCheckBox } = ccui.components;
export default defineComponent({
  name: 'case-tree',
  components: { CCTree, CCButton, CCInputNumber, CCSection, CCProp, CCCheckBox },
  setup(props, ctx) {
    const treeData1 = ref<ITreeData[]>([
      {
        text: '1',
        prefix: 'prefix 11111111111111111111111111111111111',
        subfix: 'subfix 11111111111111111111111111111111111',
        subfixIcon: 'icon_scene',
        tip: 'tip',
        children: [
          {
            text: '11',
          },
        ],
      },
      {
        text: '2',
        active: false,
        subfixIcon: 'icon_history',
        children: [
          {
            text: '21',
          },
        ],
      },
    ]);
    for (let i = 0; i < 10; i++) {
      treeData1.value.push({
        text: `test-${i}`,
      });
    }
    const treeData2 = ref<ITreeData[]>([]);
    const expandKeys = ref<string[]>([]);
    const tree3El = ref<typeof CCTree>();
    const treeData3 = ref<ITreeData[]>([
      { id: '0', text: '0', children: [{ id: '00', text: '00' }] },
      {
        id: '1',
        text: '1',
        children: [
          {
            id: '2',
            text: '2',
            children: [{ id: '3', text: '3' }],
          },
          { id: '4', text: '4' },
        ],
      },
    ]);
    for (let i = 100; i < 110; i++) {
      treeData3.value[0].children?.push({ id: i.toString(), text: i.toString() });
    }
    const treeData4 = ref<ITreeData[]>([
      {
        id: 'abcd',
        text: 'abcd',
        icon: 'icon_cocos',
        children: [
          { id: 'abc', text: 'abc', icon: 'icon_node' },
          { id: 'bcd', text: 'bcd', icon: 'icon_button' },
          { id: 'inputbox', text: 'inputbox', icon: 'icon_inputbox' },
        ],
      },
      {
        id: 'ac',
        text: 'ac',
        icon: 'icon_picture',
        children: [
          {
            id: 'ccd',
            text: 'ccd',
            icon: 'icon_text',
            children: [
              {
                id: 'de',
                icon: 'icon_prefab',
                text: 'de',
                color: '#00ff00',
              },
            ],
          },
        ],
      },
    ]);
    const isSelect = ref(false);
    const isScroll = ref(false);
    const isHighlight = ref(false);
    const key = ref(0);
    const tree4 = ref();
    return {
      tree4,
      onChangeKey(v: number) {
        key.value = v;
      },
      key,
      isHighlight,
      isSelect,
      isScroll,
      tree3El,
      expandKeys,
      treeData1,
      treeData2,
      treeData3,
      treeData4,
      onChangeTreeData4() {
        treeData4.value = [{ id: 'eee', text: 'eee' }];
      },
      onSearchFocus() {
        if (tree4) {
          tree4.value.doSearchFocus();
        }
      },
      onTreeNodeMenu(event: MouseEvent, data: ITreeData) {
        ccui.menu.showMenuByMouseEvent(event, [
          {
            name: data.text,
            callback: () => {
              console.log(data.text);
            },
          },
        ]);
      },
      onTreeNodeClick(data: ITreeData) {
        console.log('click:', data);
      },
      onTreeNodeExpend(data: ITreeData) {
        console.log('expend:', data);
        expandKeys.value.push(data.id!);
      },
      onTreeNodeCollapsed(data: ITreeData) {
        console.log('collapsed:', data);
      },
      onTreeNodeEnter(data: ITreeData) {
        console.log('enter:', data);
      },
      onTreeNodeLeave(data: ITreeData) {
        console.log('leave:', data);
      },

      freshTree1() {
        expandKeys.value = ['1'];
        const data: ITreeData[] = [];
        data.push({
          id: '1',
          text: '1',
          children: [
            {
              id: '2',
              text: '2',
              children: [
                {
                  id: '3',
                  text: '3',
                },
              ],
            },
          ],
        });
        treeData2.value = data;
      },
      freshTree2() {
        expandKeys.value = ['0'];
        const data: ITreeData[] = [];
        data.push({
          id: '11',
          text: '11',
          children: [
            {
              id: '22',
              text: '22',
            },
          ],
        });
        treeData2.value = data;
      },

      expandTest() {
        if (tree3El.value) {
          console.log(`key: ${key.value}, select: ${isSelect.value}, scroll: ${isScroll.value}, highlight: ${isHighlight.value}`);
          (tree3El.value as typeof CCTree).handExpand(key.value.toString(), { highlight: isHighlight.value, select: isSelect.value, scroll: isScroll.value } as HandExpandOptions);
        }
      },
      updateSelect(id: string) {
        if (tree3El.value) {
          (tree3El.value as typeof CCTree).handChoose(id);
        }
      },
    };
  },
});
</script>

<style scoped lang="less"></style>
