<template>
  <Teleport to="body">
    <div class="ui-menu" ref="menuEl" v-show="menus.length > 0" :style="{ left: menuPositionX + 'px', top: menuPositionY + 'px' }">
      <MenuItem v-for="(menu, index) in menus" :key="index" :data="menu"> </MenuItem>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, ref, Teleport } from 'vue';
import { IUiMenuItem, MenuOptions, Msg } from './const';
import MenuItem from './menu-item.vue';
import ccui from '../index';

export default defineComponent({
  name: 'CCMenu',
  components: { MenuItem },

  setup(props) {
    const menuEl = ref<HTMLDivElement>();
    const menuPositionX = ref(0);
    const menuPositionY = ref(0);
    const menus = ref<IUiMenuItem[]>([]);
    document.addEventListener(
      'mousedown',
      () => {
        menus.value = [];
        if (menuEl.value) {
          menuEl.value.style.overflow = 'none';
          menuEl.value.style.height = `auto`;
        }
      },
      { capture: true }
    );
    onMounted(() => {
      ccui.Emitter.on(Msg.ShowMenu, (options: MenuOptions, newMenus: IUiMenuItem[]) => {
        menus.value.length = 0;
        newMenus.forEach((item) => {
          if (item.enabled) {
            menus.value.push(item);
          }
        });
        nextTick(() => {
          if (menuEl.value) {
            let x = Math.abs(options.x);
            let y = Math.abs(options.y);
            const width = document.body.clientWidth;
            const height = document.body.clientHeight;
            const menuWidth = menuEl.value?.clientWidth;
            const menuHeight = menuEl.value?.clientHeight;
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
        });
      });
    });
    return { menuEl, menus, menuPositionX, menuPositionY };
  },
});
</script>

<style scoped lang="less">
.ui-menu {
  position: absolute;
  border: #2a2a2a solid 1px;
  box-shadow: #d3d6d9;
  background-color: #eeeff1;
  min-width: 100px;
  max-width: 200px;
}
</style>
