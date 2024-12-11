<template>
  <CCProp name="align-left" align="left">
    <CCCheckBox label="ok" :value="true"></CCCheckBox>
  </CCProp>
  <CCProp name="align-right" align="right">
    <CCCheckBox label="ok" :value="true"></CCCheckBox>
  </CCProp>
  <CCProp name="disabled" align="left">
    <CCCheckBox label="ok" :value="true" :disabled="true"></CCCheckBox>
  </CCProp>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ccui from '../packages/index';
const { CCInputNumber, CCCheckBox, CCProp } = ccui.components;
export default defineComponent({
  name: 'case-checkbox',
  components: { CCInputNumber, CCCheckBox, CCProp },
  setup(props, ctx) {
    return {};
  },
});
</script>

<style scoped lang="less"></style>
