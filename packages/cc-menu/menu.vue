<template>
  <Teleport :to="getRoot()">
    <MenuList v-for="(list, index) in menuList" :list="list" :key="index" ref="elList"></MenuList>
  </Teleport>
</template>
<script lang="ts">
import { defineComponent, nextTick, onMounted, PropType, ref, toRaw } from 'vue';
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
        if (elList.value.length) {
          for (let i = 0; i < elList.value.length; i++) {
            const list = elList.value[i];
            const b = list.hitTest(event);
            if (b) {
              return;
            }
          }
          menuList.value = [];
        }
      },
      { capture: true }
    );
    ccui.Emitter.on(Msg.CleanMenu, (id: string) => {
      cleanMenu(id);
    });
    ccui.Emitter.on(Msg.ResetMenu, () => {
      menuList.value = [];
    });
    ccui.Emitter.on(Msg.ShowMenu, (options: MenuOptions, newMenus: IUiMenuItem[]) => {
      if (options.clean === false) {
      } else {
        menuList.value = [];
      }
      nextTick(() => {
        const item: MenuListData = {
          id: uuid(),
          menus: newMenus.filter((item) => {
            if (item.visible === false) {
              return false;
            } else {
              return true;
            }
          }),
        };
        options.cb && options.cb(item.id);
        menuList.value.push(item);
        nextTick(() => {
          const len = elList.value.length;
          const e = elList.value[len - 1];
          e.rePosition(options);
        });
      });
    });
    function cleanMenu(id: string = '') {
      if (!id) {
        return;
      }
      let arr = toRaw(menuList.value);
      arr = arr.filter((item) => {
        if (item.id === id) {
          return false;
        }
        return true;
      });
      menuList.value = arr;
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
