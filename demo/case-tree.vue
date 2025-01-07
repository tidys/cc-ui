<template>
  <div>
    <CCSection name="基础测试">
      <CCTree style="max-height: 100px" :value="treeData1" @node-click="onTreeNodeClick" @node-expand="onTreeNodeExpend" @node-collapse="onTreeNodeCollapsed"></CCTree>
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
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from 'vue';
import { ITreeData } from '../packages/cc-tree/const';
import ccui from '../packages/index';

const { CCTree, CCButton, CCSection } = ccui.components;
export default defineComponent({
  name: 'case-tree',
  components: { CCTree, CCButton, CCSection },
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
    return {
      tree3El,
      expandKeys,
      treeData1,
      treeData2,
      treeData3,
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
