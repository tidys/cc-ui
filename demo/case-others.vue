<template>
  <div>
    <CCButton @click="onShowDialog">dialog</CCButton>
    <CCButton @click="onFootBar">footbar</CCButton>
    <CCButton @click="onMenu">test menu</CCButton>
    <CCButton @click="onCommand">command</CCButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ccui from '../packages/index';
const { CCButton } = ccui.components;
import { DialogUrlData, DialogOptions } from '../packages/cc-dialog/const';
import { CmdData } from '../packages/cc-command/const';
import { IUiMenuItem } from '../packages/cc-menu/const';
export default defineComponent({
  name: 'case-others',
  components: { CCButton },
  setup(props, ctx) {
    return {
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

<style scoped lang="less"></style>
