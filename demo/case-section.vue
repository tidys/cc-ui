<template>
  <div style="display: flex; flex-direction: column">
    <CCSection :expand="false" name="测试折叠"> 默认不展开 </CCSection>
    <CCSection name="TEST">
      <template v-slot:header>
        <div style="display: flex; flex: 1; flex-direction: row; justify-content: flex-end">
          <CCButton>a</CCButton>
          <CCButton>b</CCButton>
        </div>
      </template>
    </CCSection>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ccui from '../packages/index';
const { CCSection, CCButton } = ccui.components;
export default defineComponent({
  name: 'case-section',
  components: { CCSection, CCButton },
  setup(props, ctx) {
    return {};
  },
});
</script>

<style scoped lang="less"></style>
