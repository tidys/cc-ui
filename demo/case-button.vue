<template>
  <div>
    <CCProp name="test btn disabled" align="left">
      <CCButton :disabled="btnDisabled" color="green">disabled</CCButton>
      <CCCheckBox v-model:value="btnDisabled"></CCCheckBox>
    </CCProp>
    <CCProp name="br tooltip" tooltip="123<br>456" align="left">
      <CCButton tooltip="tooltip test">tooltip</CCButton>
    </CCProp>
    <CCProp name="overflow" align="left">
      <CCButton style="width: 60px">1234567890</CCButton>
    </CCProp>
    <CCProp name="icon button" align="left">
      <CCButton><i class="iconfont icon_doc"></i></CCButton>
    </CCProp>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ccui from '../packages/index';
const { CCButton, CCProp, CCCheckBox } = ccui.components;
export default defineComponent({
  name: 'case-button',
  components: { CCButton, CCProp, CCCheckBox },
  setup(props, ctx) {
    const btnDisabled = ref(true);

    return {
      btnDisabled,
    };
  },
});
</script>

<style scoped lang="less"></style>
