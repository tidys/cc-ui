<template>
  <div class="menu">
    <CCButton @click="onMenu">menu normal</CCButton>
    <CCButton @click="onMenuIcon">menu icon&shortkey</CCButton>
    <CCButton @click="onMenuOpacity">menu opacity</CCButton>
    <CCButton @click="onMenuSelected">menu selected</CCButton>
    <CCButton @click="onMenuVisible">menu visible</CCButton>
    <CCButton @click="onMenuEnabled">menu enabled</CCButton>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { CCButton } from '../packages/cc-button';
import { CCProp } from '../packages/cc-prop';
import { IUiMenuItem, MenuType } from '../packages/cc-menu/const';
import ccui from '../packages/index';

export default defineComponent({
  name: 'menu',
  components: { CCButton, CCProp },
  setup(props, { emit }) {
    return {
      onMenu(event: MouseEvent) {
        const menus: IUiMenuItem[] = [];
        for (let i = 0; i < 10; i++) {
          menus.push({
            name: i.toString(),
            callback: () => {
              console.log(i);
            },
          });
        }
        menus.push({
          name: 'Separator',
          type: MenuType.Separator,
          callback: () => {},
        });
        for (let i = 10; i < 20; i++) {
          menus.push({
            name: i.toString(),
            callback: () => {
              console.log(i);
            },
          });
        }
        ccui.menu.showMenuByMouseEvent(event, menus);
      },
      onMenuIcon(event: MouseEvent) {
        const menus: IUiMenuItem[] = [
          {
            name: 'icon11111111111',
            icon: 'github',
            shortKey: 'Space',
            callback: () => {},
          },
        ];
        ccui.menu.showMenuByMouseEvent(event, menus);
      },
      onMenuVisible(event: MouseEvent) {
        const menus: IUiMenuItem[] = [];
        for (let i = 0; i < 20; i++) {
          menus.push({
            name: i.toString(),
            visible: !!(i % 2),
            callback: () => {
              console.log(i);
            },
          });
        }
        ccui.menu.showMenuByMouseEvent(event, menus);
      },
      onMenuSelected(event: MouseEvent) {
        const menus: IUiMenuItem[] = [
          {
            name: 'selected',
            selected: true,
            callback: () => {
              console.log('selected');
            },
          },
          {
            name: 'not selected',
            selected: false,
            callback: () => {
              console.log('not selected');
            },
          },
        ];
        ccui.menu.showMenuByMouseEvent(event, menus);
      },
      onMenuOpacity(event: MouseEvent) {
        const menus: IUiMenuItem[] = [];
        for (let i = 0; i < 20; i++) {
          menus.push({
            name: i.toString(),
            callback: () => {
              console.log(i);
            },
          });
        }
        ccui.menu.showMenuByMouseEvent(event, menus, 0.5);
      },
      onMenuEnabled(event: MouseEvent) {
        const menus: IUiMenuItem[] = [];
        menus.push({
          name: 'icon',
          icon: 'github',
          shortKey: 'Space',
          enabled: false,
          callback: () => {},
        });
        for (let i = 0; i < 20; i++) {
          menus.push({
            name: i.toString(),
            enabled: i > 10,
            callback: () => {
              console.log(i);
            },
          });
        }

        ccui.menu.showMenuByMouseEvent(event, menus);
      },
    };
  },
});
</script>
<style lang="less" scoped>
.menu {
  display: flex;
  flex-direction: column;
}
</style>
