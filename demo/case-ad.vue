<template>
  <CCAd></CCAd>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ccui from '../packages/index';
const { CCProcess, CCAd } = ccui.components;
export default defineComponent({
  name: 'case1',
  components: { CCProcess, CCAd },
  setup(props, ctx) {
    return {};
  },
});
</script>

<style scoped lang="less"></style>
