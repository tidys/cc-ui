<template>
  <CCColor></CCColor>
  <div style="margin-left: 100px; display: flex; flex-direction: column">
    <CCColor></CCColor>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ccui from '../packages/index';
const { CCColor } = ccui.components;
export default defineComponent({
  name: 'case1',
  components: { CCColor },
  setup(props, ctx) {
    return {};
  },
});
</script>

<style scoped lang="less"></style>
