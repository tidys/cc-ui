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
        <CCButton @click="expandTreeItem">should expand/select 3</CCButton>
        <CCButton @click="expandTreeItem2">should expand/highlight 2</CCButton>
        <CCButton @click="updateSelect('2')">select 2</CCButton>
        <CCButton @click="updateSelect('100')">select 100</CCButton>
      </div>
    </CCSection>
    <CCSection name="search">
      <CCProp name="test">
        <CCButton @click="onChangeTreeData4">change tree</CCButton>
      </CCProp>
      <CCTree :show-icon="true" :value="treeData4" style="max-height: 300px; min-height: 300px" :search="true"></CCTree>
    </CCSection>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from 'vue';
import { ITreeData } from '../packages/cc-tree/const';
import ccui from '../packages/index';

const { CCTree, CCButton, CCSection, CCProp } = ccui.components;
export default defineComponent({
  name: 'case-tree',
  components: { CCTree, CCButton, CCSection, CCProp },
  setup(props, ctx) {
    const treeData1 = ref<ITreeData[]>([
      {
        text: '1',
        children: [
          {
            text: '11',
          },
        ],
      },
      {
        text: '2',
        active: false,
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
    return {
      tree3El,
      expandKeys,
      treeData1,
      treeData2,
      treeData3,
      treeData4,
      onChangeTreeData4() {
        treeData4.value = [{ id: 'eee', text: 'eee' }];
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
      expandTreeItem() {
        if (tree3El.value) {
          (tree3El.value as typeof CCTree).handExpand('3', { select: true });
        }
      },
      expandTreeItem2() {
        if (tree3El.value) {
          (tree3El.value as typeof CCTree).handExpand('2', { highlight: true });
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
