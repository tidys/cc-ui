<template>
  <div style="display: flex; flex-direction: row; height: 100px; width: 100%">
    <div style="min-width: 20px; flex: 1; height: 100%; background-color: rgb(138, 138, 138)"></div>
    <CCDivider :vertical="true" color="#444"></CCDivider>
    <div style="min-width: 20px; flex: 1; height: 100%; background-color: rgb(214, 214, 214)"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ccui from '../packages/index';
const { CCDivider } = ccui.components;
export default defineComponent({
  name: 'case-divider',
  components: { CCDivider },
  setup(props, ctx) {
    return {};
  },
});
</script>

<style scoped lang="less"></style>
