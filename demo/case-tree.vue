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
    return {
      expandKeys,
      treeData1,
      treeData2,
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
    };
  },
});
</script>

<style scoped lang="less"></style>
