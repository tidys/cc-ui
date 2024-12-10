<template>
  <CCProp name="html tooltip" tooltip="123<hr>456"></CCProp>
  <CCProp name="hintColor" :hint="hint">
    <CCCheckBox v-model:value="hint"></CCCheckBox>
  </CCProp>
  <CCProp name="arrow" :arrow="true" v-model:expand="expand" @change-expand="onChangeExpand">
    <CCButton @click="expand = !expand">expand</CCButton>
  </CCProp>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ccui from '../packages/index';
const { CCProp, CCCheckBox, CCButton } = ccui.components;
export default defineComponent({
  name: 'case-prop',
  components: { CCProp, CCCheckBox, CCButton },
  setup(props, ctx) {
    const hint = ref(true);
    const expand = ref(false);
    return {
      hint,
      expand,
      onChangeExpand(v) {
        console.log(v);
      },
    };
  },
});
</script>

<style scoped lang="less"></style>
