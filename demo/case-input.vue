<template>
  <div>
    <CCInput placeholder="test placeholder" :directory="true"></CCInput>

    <CCProp name="input" tooltip="测试tooltip">
      <CCInput @change="onChangeText" v-model:value="value"></CCInput>
    </CCProp>
    <CCProp name="disabled" tooltip="测试禁用">
      <CCInput :disabled="true" value="disabled"></CCInput>
    </CCProp>
    <CCProp name="readonly" tooltip="1111111 1111111111111111111111111111111111">
      <CCInput :readonly="true" value="readonly"></CCInput>
    </CCProp>
    <CCProp name="readonly && disabled" tooltip="test tooltip 1111111111111111111111144444444444444444444444444444444441111444444444444444444444444444444444444444444444444411111111111">
      <CCInput :disabled="true" :readonly="true" value="readonly"></CCInput>
    </CCProp>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import ccui from '../packages/index';
const { CCProcess, CCInput } = ccui.components;
export default defineComponent({
  name: 'case-input',
  components: { CCProcess, CCInput },
  setup(props, ctx) {
    const value = ref('123');
    onMounted(() => {
      setTimeout(() => {
        value.value = '456';
      }, 2000);
    });
    return {
      value,
      onChangeText() {
        console.log(value.value);
      },
    };
  },
});
</script>

<style scoped lang="less"></style>
