<template>
  <div>
    <CCProp name="test btn disabled">
      <CCButton :disabled="btnDisabled" color="green">disabled</CCButton>
      <CCCheckBox v-model:value="btnDisabled"></CCCheckBox>
    </CCProp>
    <CCProp name="br tooltip" tooltip="123<br>456" align="left">
      <CCButton tooltip="tooltip test">tooltip</CCButton>
    </CCProp>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ccui from '../packages/index';
const { CCButton } = ccui.components;
export default defineComponent({
  name: 'case1',
  components: { CCButton },
  setup(props, ctx) {
    const btnDisabled = ref(true);

    return {
      btnDisabled,
    };
  },
});
</script>

<style scoped lang="less"></style>
