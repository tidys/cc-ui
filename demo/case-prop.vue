<template>
  <CCProp name="html tooltip" tooltip="123<hr>456"></CCProp>
  <CCProp name="hintColor" :hint="hint">
    <CCCheckBox v-model:value="hint"></CCCheckBox>
  </CCProp>
  <CCProp name="arrow" :arrow="true" :slide="true" @slide="onSlide" v-model:expand="expand" @change-expand="onChangeExpand">
    <CCButton @click="expand = !expand">expand</CCButton>
  </CCProp>
  <CCProp name="expand" :arrow="true" @change-expand="onChangeExpand"></CCProp>
  <CCProp name="test slide" :slide="true">
    <CCInputNumber :value="1" @change="onChangeNumber"></CCInputNumber>
  </CCProp>
  <CCProp name="indent indent indent indent" :indent="20">
    <CCInputNumber></CCInputNumber>
  </CCProp>
  <CCProp v-model:name="name">
    <CCInput v-model:value="name"></CCInput>
  </CCProp>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ccui from '../packages/index';
const { CCProp, CCInput, CCCheckBox, CCButton, CCInputNumber } = ccui.components;
export default defineComponent({
  name: 'case-prop',
  components: { CCProp, CCInput, CCCheckBox, CCButton, CCInputNumber },
  setup(props, ctx) {
    const hint = ref(true);
    const expand = ref(false);
    const name = ref('prop name');
    return {
      hint,
      name,
      expand,
      onChangeExpand(v: boolean) {
        console.log(v);
      },
      onSlide(v: number) {
        console.log(`step:${v}`);
      },
      onChangeNumber(v: number) {
        console.log(v);
      },
    };
  },
});
</script>

<style scoped lang="less"></style>
