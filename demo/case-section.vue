<template>
  <div style="display: flex; flex-direction: column">
    <CCSection :expand="false" @change="onChange" name="测试折叠"> 默认不展开 </CCSection>
    <CCSection :name="sectionName" :expand="sectionExpand" @change="onChange">
      <template v-slot:header>
        <div style="display: flex; flex: 1; flex-direction: row; justify-content: flex-end">
          <CCButton @confirm="changeSectionName">name</CCButton>
          <CCButton @confirm="changeSectionExpand">expand</CCButton>
        </div>
      </template>
      <div>测试header</div>
    </CCSection>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ccui from '../packages/index';
const { CCSection, CCButton } = ccui.components;
export default defineComponent({
  name: 'case-section',
  components: { CCSection, CCButton },
  setup(props, ctx) {
    let i = 0;
    const sectionName = ref('TEST');
    const sectionExpand = ref(true);
    return {
      sectionName,
      sectionExpand,
      onChange: (expand: boolean) => {
        console.log('expand: ', expand);
      },
      changeSectionName() {
        sectionName.value = `TEST${++i}`;
      },
      changeSectionExpand() {
        sectionExpand.value = !sectionExpand.value;
      },
    };
  },
});
</script>

<style scoped lang="less"></style>
