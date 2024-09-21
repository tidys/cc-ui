<template>
  <div style="display: flex; flex-direction: row">
    <CCButton @click="onShowDialog">dialog</CCButton>
    <CCButton @click="onShowCustomDialog">dialog-custom</CCButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ccui from '../packages/index';
import dialogCustom from './case-dialog-custom.vue';
import { DialogUrlData, DialogOptions } from '../packages/cc-dialog/const';
const { CCDialog, CCButton } = ccui.components;
export default defineComponent({
  name: 'case-dialog',
  components: { CCDialog, CCButton },
  setup(props, ctx) {
    return {
      onShowDialog() {
        const data: DialogUrlData = new DialogUrlData();
        data.url = 'http://www.cocos.com';
        data.label = '访问{cocos}官网';
        data.jump = 4;
        const opts: DialogOptions = { data };
        ccui.dialog.showDialog(opts);
      },
      onShowCustomDialog() {
        ccui.dialog.showDialog({
          comp: dialogCustom,
          data: 'hello',
        });
      },
    };
  },
});
</script>
