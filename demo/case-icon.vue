<template>
  <CCProp name="iconfont">
    <i class="iconfont icon_refresh"></i>
    <i class="iconfont icon_cmder"></i>
    <div class="iconfont icon_doc"></div>
  </CCProp>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ccui from '../packages/index';
const { CCProp } = ccui.components;
export default defineComponent({
  name: 'case-icon',
  components: { CCProp },
  setup(props, ctx) {
    return {};
  },
});
</script>

<style scoped lang="less"></style>
