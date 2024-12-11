<template>
  <div>
    <CCProp name="textarea">
      <CCTextarea data="111" :readonly="false" @change="onChangeTextarea"></CCTextarea>
    </CCProp>
    <CCProp name="readonly">
      <CCTextarea data="readonly" :readonly="true" @change="onChangeTextarea"></CCTextarea>
    </CCProp>
  </div>
</template>

<script lang="ts">
import { read } from '@popperjs/core';
import { defineComponent } from 'vue';
import ccui from '../packages/index';
const { CCTextarea, CCProp } = ccui.components;
export default defineComponent({
  name: 'case-textarea',
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
