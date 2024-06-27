<template>
  <CCProp name="input number">
    <CCInputNumber :value="1" :min="0"></CCInputNumber>
  </CCProp>
  <CCProp name="input number disabled">
    <CCInputNumber :value="2" :disabled="true"></CCInputNumber>
  </CCProp>
  <CCProp name="input number readonly">
    <CCInputNumber :value="2" :readonly="true"></CCInputNumber>
  </CCProp>
  <CCInputNumber :min="1" :value="-11"></CCInputNumber>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ccui from '../packages/index';
const { CCColor, CCProp, CCInputNumber } = ccui.components;
export default defineComponent({
  name: 'case-input-number',
  components: { CCColor, CCProp, CCInputNumber },
  setup(props, ctx) {
    return {};
  },
});
</script>

<style scoped lang="less"></style>
