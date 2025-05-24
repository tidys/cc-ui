<template>
  <div class="ui-menu" @contextmenu.stop.prevent="" ref="menuEl" v-show="list.menus.length > 0" :style="{ left: menuPositionX + 'px', top: menuPositionY + 'px', opacity: opacity }">
    <MenuItem v-for="(menu, index) in list.menus" :key="index" :data="menu" :style="{ opacity: opacity }"> </MenuItem>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, nextTick, onMounted, onUnmounted, PropType, provide, ref, Teleport } from 'vue';
import { IUiMenuItem, MenuListData, MenuOptions, Msg, ProvideKeys } from './const';
import MenuItem from './menu-item.vue';
import ccui from '../index';
import { uiElement } from '../element';
import { TinyEmitter } from 'tiny-emitter';

export default defineComponent({
  name: 'CCMenuList',
  components: { MenuItem },
  props: {
    list: {
      type: Object as PropType<MenuListData>,
      default: () => {},
    },
  },
  setup(props) {
    const menuEl = ref<HTMLDivElement>();
    const menuPositionX = ref(0);
    const menuPositionY = ref(0);
    const emitter = new TinyEmitter();
    /**子菜单的UUID */
    let subMenuListID: string = '';
    provide(ProvideKeys.Emitter, emitter);
    provide(ProvideKeys.SetSubMenuListID, (id: string) => {
      if (subMenuListID) {
        ccui.Emitter.emit(Msg.CleanMenu, subMenuListID);
        subMenuListID = '';
      }
      subMenuListID = id;
    });
    onMounted(() => {});
    onUnmounted(() => {
      ccui.Emitter.emit(Msg.CleanMenu, subMenuListID || '');
    });
    const opacity = ref(1);
    return {
      opacity,
      menuEl,
      menuPositionX,
      menuPositionY,
      hitTest(event: MouseEvent) {
        if (event.target && menuEl.value && menuEl.value.contains(event.target as HTMLDivElement)) {
          return true;
        }
        return false;
      },
      rePosition(options: MenuOptions) {
        opacity.value = options.opacity === undefined ? 1 : options.opacity;
        if (!menuEl.value) {
          return;
        }

        function updatePosByPoint() {
          if (!menuEl.value) {
            return;
          }
          let x = Math.abs(options.x === undefined ? 0 : options.x) + 2;
          let y = Math.abs(options.y === undefined ? 0 : options.y);
          const board = 3;
          if (menuHeight >= height) {
            menuEl.value.style.overflowX = 'hidden';
            menuEl.value.style.overflowY = 'scroll';
            menuEl.value.style.height = `${height - board * 2}px`;
            x = Math.min(x, width - menuWidth - board);
            menuPositionX.value = x;
            menuPositionY.value = board;
          } else {
            x = Math.min(x, width - menuWidth - board);
            y = Math.min(y, height - menuHeight - board);
            menuEl.value.style.overflow = 'none';
            menuEl.value.style.height = `auto`;
            menuPositionX.value = x;
            menuPositionY.value = y;
          }
        }
        const width = uiElement.getDoc().body.clientWidth;
        const height = uiElement.getDoc().body.clientHeight;
        const menuWidth = menuEl.value?.clientWidth;
        const menuHeight = menuEl.value?.clientHeight;
        const baseEl = options.element || null;
        if (baseEl) {
          // 根据父级元素定位
          const rect = baseEl.getBoundingClientRect();
          if (rect.right + menuWidth <= width) {
            // 可以往右边放
            menuPositionX.value = rect.right;
            menuPositionY.value = rect.top;
          } else if (rect.left - menuWidth >= 0) {
            // 可以往左边放
            menuPositionX.value = rect.left - menuWidth;
            menuPositionY.value = rect.top;
          } else {
            // 左右都放不下，就放在鼠标位置
            updatePosByPoint();
          }
        } else {
          // 根据鼠标位置定位
          updatePosByPoint();
        }
      },
    };
  },
});
</script>

<style scoped lang="less">
.ui-menu {
  z-index: 9999;
  position: absolute;
  border: #2a2a2a solid 1px;
  box-shadow: #d3d6d9;
  background-color: #eeeff1;
  min-width: 100px;
  max-width: 1000px;
  box-sizing: border-box;
}
</style>
