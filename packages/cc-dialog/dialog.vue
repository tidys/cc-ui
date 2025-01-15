<template>
  <Teleport :to="getRoot()">
    <div class="ui-dialog" v-if="show" @click.self="onMaskClick">
      <CCWindow class="container" v-for="(win, index) in dialogWindows" :key="index" :data="getWindowOption(win)" @close="onWinClose(win.id || '')">
        <component class="comp" :is="getWindowRenderComponent(win)" @close="onWinClose(win.id || '')" :data="getWindowRenderComponentData(win)" :id="getWindowRenderComponentID(win)"> </component>
      </CCWindow>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, markRaw, onMounted, onUnmounted, ref, Teleport } from 'vue';
import { DialogOptions, DialogMsg, DialogUrlData } from './const';
import { UiWindowOptions } from '../cc-window/index';
import CCWindow from '../cc-window/window.vue';
import ccui from '../index';
import Mousetrap, { MousetrapInstance } from 'mousetrap';
import { generate } from 'short-uuid';
import Empty from '../cc-window/empty.vue';
import UrlTip from './url.vue';
import { uiElement } from '../element';
export default defineComponent({
  name: 'cc-dialog',
  components: { CCWindow },
  setup() {
    const dialogWindows = ref<DialogOptions[]>([]);
    const show = ref(false);

    function onWinClose(id: string) {
      if (!id) {
        return;
      }
      const idx = dialogWindows.value.findIndex((el) => el.id === id);
      if (idx !== -1) {
        dialogWindows.value.splice(idx, 1);
        show.value = !!dialogWindows.value.length;
      }
    }

    function onShowDialog(options: DialogOptions) {
      if (options.data && options.data instanceof DialogUrlData) {
        options.comp = markRaw(UrlTip);
      } else {
        options.comp = markRaw(options.comp || Empty);
      }
      const opt: DialogOptions = Object.assign(new DialogOptions(), options);
      dialogWindows.value.push(opt);
      show.value = true;
    }
    function onCloseDialog(id: string) {
      onWinClose(id);
    }
    let ins: MousetrapInstance | null = null;
    onMounted(() => {
      ccui.Emitter.on(DialogMsg.ShowDialog, onShowDialog);
      ccui.Emitter.on(DialogMsg.CloseDialog, onCloseDialog);
      // 可能会干扰到其他组件的key事件
      ins = new Mousetrap(document.body);
      ins.bind(['esc'], onClick, 'keydown');
    });
    onUnmounted(() => {
      ccui.Emitter.off(DialogMsg.ShowDialog, onShowDialog);
      ccui.Emitter.off(DialogMsg.CloseDialog, onCloseDialog);
      if (ins) {
        ins.unbind(['esc'], 'keydown');
      }
    });

    function getLastDialog() {
      const len = dialogWindows.value.length;
      if (len) {
        return dialogWindows.value[len - 1];
      }
      return null;
    }

    function onMaskClick() {
      const opt = getLastDialog();
      if (opt) {
        const { clickOutsideClose } = opt as DialogOptions;
        if (clickOutsideClose === undefined || clickOutsideClose) {
          onClick();
        }
      }
    }

    function onClick() {
      const opt = getLastDialog();
      if (opt) {
        const { closeCB } = opt as UiWindowOptions;
        if (closeCB) {
          closeCB();
        }
        onWinClose(opt.id || '');
      }
    }

    return {
      dialogWindows,
      getWindowOption(opt: DialogOptions): UiWindowOptions {
        return {
          id: opt.id || generate(),
          width: opt.width,
          height: opt.height,
          title: opt.title,
          closeCB: opt.closeCB,
          responseCB: opt.responseCB,
        };
      },
      getWindowRenderComponent(opt: DialogOptions) {
        return markRaw(opt.comp);
      },
      getWindowRenderComponentData(opt: DialogOptions) {
        return opt.data;
      },
      getWindowRenderComponentID(opt: DialogOptions) {
        return opt.id;
      },
      show,
      onWinClose,
      onMaskClick,
      getRoot() {
        return uiElement.getBobdy();
      },
    };
  },
});
</script>

<style scoped lang="less">
.ui-dialog {
  // pointer-events: none;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(103, 102, 103, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .container {
    position: absolute;
    outline: none;

    .comp {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
  }
}
</style>
