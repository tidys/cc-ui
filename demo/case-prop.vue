<template>
  <CCProp name="html tooltip" tooltip="123<hr>456"></CCProp>
  <CCProp name="hintColor" :hint="hint">
    <CCCheckBox v-model:value="hint"></CCCheckBox>
  </CCProp>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ccui from '../packages/index';
const { CCProp, CCCheckBox } = ccui.components;
export default defineComponent({
  name: 'case-prop',
  components: { CCProp, CCCheckBox },
  setup(props, ctx) {
    const hint = ref(true);
    return { hint };
  },
});
</script>

<style scoped lang="less"></style>
