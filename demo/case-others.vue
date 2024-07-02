<template>
  <div class="others">
    <CCButton @click="onShowDialog">dialog</CCButton>
    <CCButton @click="onFootBar">footbar</CCButton>
    <CCButton @click="onFootBarColor">footbar-color</CCButton>
    <CCButton @click="onFootBarError">footbar-error</CCButton>
    <CCButton @click="onMenu">test menu</CCButton>
    <CCButton @click="onCommand">command</CCButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import ccui from '../packages/index';
const { CCButton } = ccui.components;
import { DialogUrlData, DialogOptions } from '../packages/cc-dialog/const';
import { CmdData } from '../packages/cc-command/const';
import { IUiMenuItem } from '../packages/cc-menu/const';
export default defineComponent({
  name: 'case-others',
  components: { CCButton },
  setup(props, ctx) {
    onMounted(() => {
      let errorTitle = '111111111111111 222222222222222222222';
      let errorContent = '';
      for (let i = 0; i < 20; i++) {
        errorContent += `${i} 1111111111111112222222222222 `;
      }
      ccui.footbar.showError(errorContent, { title: errorTitle, resetWhenClose: true });
    });
    return {
      onFootBarError() {
        ccui.footbar.showError('11');
      },
      onFootBarColor() {
        ccui.footbar.showTips('11', { duration: -1, color: 'red' });
      },
      onFootBar() {
        ccui.footbar.showTips('11');
      },
      onMenu(event: MouseEvent) {
        const menus: IUiMenuItem[] = [];
        for (let i = 0; i < 20; i++) {
          menus.push({
            name: i.toString(),
            callback: () => {
              console.log('hello');
            },
          });
        }
        ccui.menu.showMenuByMouseEvent(event, menus);
      },
      onCommand() {
        const cmd: CmdData[] = [];
        for (let i = 0; i < 10; i++) {
          cmd.push({
            label: i.toString(),
            cb: () => {
              console.log(i);
            },
          });
        }
        ccui.command.showCommand(cmd);
      },
      onShowDialog() {
        const data: DialogUrlData = new DialogUrlData();
        data.url = 'http://www.cocos.com';
        data.label = '访问{cocos}官网';
        data.jump = 4;
        const opts: DialogOptions = { data };
        ccui.dialog.showDialog(opts);
      },
    };
  },
});
</script>

<style scoped lang="less">
.others {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
