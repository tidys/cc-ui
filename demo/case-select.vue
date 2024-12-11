<template>
  <div class="root">
    <CCProp name="height:30px;">
      <CCSelect style="height: 30px" value="1" :data="[]"></CCSelect>
    </CCProp>
    <CCProp name="test2">
      <CCSelect @change="onChangeSelect" :data="selectData" v-model:value="selectValue"> </CCSelect>
    </CCProp>
    <CCProp name="arrow">
      <CCSelect :arrow="true" :data="selectData" v-model:value="selectValue"></CCSelect>
    </CCProp>
    <CCProp name="disabled">
      <CCSelect :disabled="true" :data="selectData" v-model:value="selectValue"></CCSelect>
    </CCProp>
    <CCProp name="data1-test-add">
      <CCSelect :arrow="true" :data="selectData1" v-model:value="selectValue1"></CCSelect>
    </CCProp>
    <div class="btn">
      <CCButton @confirm="onClickAdd">add</CCButton>
    </div>
  </div>
</template>

<script lang="ts">
import { arrow } from '@popperjs/core';
import { defineComponent, onMounted, ref } from 'vue';
import ccui from '../packages/index';
const { CCSelect, CCProp, CCButton } = ccui.components;
export default defineComponent({
  name: 'case-select',
  components: { CCSelect, CCProp, CCButton },
  setup(props, ctx) {
    const data: Array<{ label: string; value: number }> = [];
    for (let i = 0; i < 50; i++) {
      data.push({ label: i.toString(), value: i });
    }
    const selectData = ref(data);
    onMounted(() => {
      setTimeout(() => {
        selectValue.value = '3';
      }, 1000);
      setTimeout(() => {
        const len = selectData.value.length;
        selectData.value.push({ label: len.toString(), value: len });
      }, 2000);
    });
    const selectValue = ref('1');

    const selectValue1 = ref('0');
    const data1: Array<{ label: string; value: number }> = [];
    for (let i = 0; i < 2; i++) {
      data1.push({ label: i.toString(), value: i });
    }
    const selectData1 = ref(data1);
    return {
      selectValue,
      selectValue1,
      selectData,
      selectData1,
      onChangeSelect() {
        console.log(selectValue.value);
      },
      onClickAdd() {
        const len = selectData1.value.length;
        selectData1.value.push({ label: len.toString(), value: len });
      },
    };
  },
});
</script>

<style scoped lang="less">
.root {
  display: flex;
  flex-direction: column;
  .btn {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
