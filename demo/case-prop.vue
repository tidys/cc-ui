<template>
  <CCProp name="html tooltip" tooltip="123<hr>456"></CCProp>
  <CCProp name="hintColor" :hint="hint">
    <CCCheckBox v-model:value="hint"></CCCheckBox>
  </CCProp>
  <CCProp name="arrow" :arrow="true" :slide="true" @slide="onSlide" v-model:expand="expand" @change-expand="onChangeExpand">
    <CCButton @click="expand = !expand">expand</CCButton>
  </CCProp>
  <CCProp name="test slide" :slide="true">
    <CCInputNumber :value="1" @change="onChangeNumber"></CCInputNumber>
  </CCProp>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ccui from '../packages/index';
const { CCProp, CCCheckBox, CCButton, CCInputNumber } = ccui.components;
export default defineComponent({
  name: 'case-prop',
  components: { CCProp, CCCheckBox, CCButton, CCInputNumber },
  setup(props, ctx) {
    const hint = ref(true);
    const expand = ref(false);
    return {
      hint,
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
