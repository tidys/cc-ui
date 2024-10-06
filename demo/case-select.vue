<template>
  <div>
    <CCProp name="height:30px;">
      <CCSelect style="height: 30px" value="1" :data="[]"></CCSelect>
    </CCProp>
    <CCProp name="test2">
      <CCSelect @change="onChangeSelect" :data="selectData" v-model:value="selectValue"> </CCSelect>
    </CCProp>
    <CCProp name="arrow">
      <CCSelect :arrow="true" :data="selectData" v-model:value="selectValue"></CCSelect>
    </CCProp>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import ccui from '../packages/index';
import { arrow } from '@popperjs/core';
const { CCSelect, CCProp } = ccui.components;
export default defineComponent({
  name: 'case-select',
  components: { CCSelect, CCProp },
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

    return {
      selectValue,
      selectData,
      onChangeSelect() {
        console.log(selectValue.value);
      },
    };
  },
});
</script>

<style scoped lang="less"></style>
