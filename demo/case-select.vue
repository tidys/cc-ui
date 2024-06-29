<template>
  <div>
    <CCProp name="height:30px;">
      <CCSelect style="height: 30px" value="1" :data="[]"></CCSelect>
    </CCProp>
    <CCProp name="test2">
      <CCSelect @change="onChangeSelect" :data="selectData" v-model:value="selectValue"> </CCSelect>
    </CCProp>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import ccui from '../packages/index';
const { CCSelect, CCProp } = ccui.components;
export default defineComponent({
  name: 'case-select',
  components: { CCSelect, CCProp },
  setup(props, ctx) {
    const selectData = ref([
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
    ]);
    onMounted(() => {
      setTimeout(() => {
        selectValue.value = '3';
      }, 1000);
      setTimeout(() => {
        selectData.value.push({ label: '4', value: 4 });
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
