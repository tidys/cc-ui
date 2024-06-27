<template>
  <div>
    <CCProp name="textarea">
      <CCTextarea data="111" @change="onChangeTextarea"></CCTextarea>
    </CCProp>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ccui from '../packages/index';
const { CCTextarea, CCProp } = ccui.components;
export default defineComponent({
  name: 'case1',
  components: { CCTextarea, CCProp },
  setup(props, ctx) {
    const onChangeTextarea = (e: any) => {
      console.log(e);
    };
    return {
      onChangeTextarea(v: string) {
        console.log(v);
      },
    };
  },
});
</script>

<style scoped lang="less"></style>
