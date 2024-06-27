<template>
  <CCProp name="html tooltip" tooltip="123<hr>456"></CCProp>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ccui from '../packages/index';
const { CCProp } = ccui.components;
export default defineComponent({
  name: 'case-prop',
  components: { CCProp },
  setup(props, ctx) {
    return {};
  },
});
</script>

<style scoped lang="less"></style>
