<template>
  <div>
    <CCTree style="max-height: 100px" :value="treeData" @node-click="onTreeNodeClick" @node-expand="onTreeNodeExpend" @node-collapse="onTreeNodeCollapsed"></CCTree>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ccui from '../packages/index';
import { ITreeData } from '../packages/cc-tree/const';

const { CCTree } = ccui.components;
export default defineComponent({
  name: 'case1',
  components: { CCTree },
  setup(props, ctx) {
    const treeData = ref<ITreeData[]>([
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
      },
    ]);
    for (let i = 0; i < 10; i++) {
      treeData.value.push({
        text: `test-${i}`,
      });
    }
    return {
      treeData,
      onTreeNodeClick(data: ITreeData) {
        console.log('click:', data);
      },
      onTreeNodeExpend(data: ITreeData) {
        console.log('expend:', data);
      },
      onTreeNodeCollapsed(data: ITreeData) {
        console.log('collapsed:', data);
      },
    };
  },
});
</script>

<style scoped lang="less"></style>
