<template>
  <Teleport :to="getRoot()">
    <MenuList v-for="(list, index) in menuList" :list="list" :key="index" ref="elList"></MenuList>
  </Teleport>
</template>
<script lang="ts">
import { defineComponent, nextTick, PropType, ref, toRaw } from 'vue';
import { IUiMenuItem, MenuListData, MenuOptions, MenuType, Msg, showMenuByMouseEvent } from './const';
import ccui from '../index';
import { uiElement } from '../element';
import MenuList from './menu-list.vue';
import { uuid } from 'short-uuid';

export default defineComponent({
  name: 'CCMenu',
  components: { MenuList },
  setup(props, ctx) {
    const menuList = ref<MenuListData[]>([]);
    uiElement.getDoc().addEventListener(
      'mousedown',
      (event: MouseEvent) => {
        return;
        for (let i = 0; i < elList.value.length; i++) {
          const list = elList.value[i];
          debugger;
          const b = list.hitTest(event);
          if (b) {
            return;
          }
        }
        hideMenu();
      },
      { capture: true }
    );
    ccui.Emitter.on(Msg.HideMenu, () => {
      hideMenu();
    });
    ccui.Emitter.on(Msg.ShowMenu, (options: MenuOptions, newMenus: IUiMenuItem[]) => {
      menuList.value.push({
        id: uuid(),
        menus: newMenus.filter((item) => {
          if (item.visible === false) {
            return false;
          } else {
            return true;
          }
        }),
      });
      nextTick(() => {
        const len = elList.value.length;
        const e = elList.value[len - 1];
        e.rePosition(options);
      });
    });
    function hideMenu() {
      menuList.value = [];
    }
    const elList = ref<Array<typeof MenuList>>([]);
    return {
      menuList,
      elList,
      getRoot() {
        return uiElement.getBobdy();
      },
    };
  },
});
</script>
<style lang="less" scoped></style>
