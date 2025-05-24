<template>
  <div v-if="getIsSeparator()" class="separator"></div>
  <div v-if="getIsMenu()" ref="menuEl" class="ui-menu-item" :class="{ disabled: data.enabled === false, 'ui-menu-item-select': isSelect }" @mousedown="onClick" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" :title="data.tip || ''">
    <i :style="getIconStyle()" :class="getIconClass()" class="iconfont icon"></i>
    <span class="text">{{ data.name }}</span>
    <div class="short-key" v-if="data.shortKey">{{ data.shortKey }}</div>
    <i v-if="data.items && data.items.length" class="iconfont icon_arrow_right_line"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, onUnmounted, PropType, ref, toRaw } from 'vue';
import { IUiMenuItem, MenuType, Msg, ProvideKeys, showMenuByMouseEvent } from './const';
import ccui from '../index';
import { createPopper } from '@popperjs/core';
import { TinyEmitter } from 'tiny-emitter';

export default defineComponent({
  name: 'menu-item',
  props: {
    data: {
      type: Object as PropType<IUiMenuItem>,
      required: true,
      default: () => {
        return { name: '', enabled: true, callback: null };
      },
    },
  },
  setup(props) {
    let subMenuListID: string = '';
    const menuEl = ref<HTMLElement>();
    const setSubMenuListID = inject(ProvideKeys.SetSubMenuListID, (id: string) => {});
    const emitter = inject<TinyEmitter>(ProvideKeys.Emitter) as TinyEmitter;
    function onResetSubMenuListID(id: string) {
      if (subMenuListID !== id) {
        subMenuListID = '';
      }
    }
    function onResetSelect() {
      isSelect.value = false;
    }
    onMounted(() => {
      emitter.on(Msg.ResetSubMenuListID, onResetSubMenuListID);
      emitter.on(Msg.ResetSelect, onResetSelect);
    });
    onUnmounted(() => {
      emitter.off(Msg.ResetSubMenuListID, onResetSubMenuListID);
      emitter.off(Msg.ResetSelect, onResetSelect);
    });
    function showSubMenus(event: MouseEvent, item: IUiMenuItem) {
      emitter.emit(Msg.ResetSubMenuListID, subMenuListID);
      if (subMenuListID) {
        return;
      }
      if (item.items) {
        showMenuByMouseEvent(event, item.items, {
          clean: false,
          element: menuEl.value,
          cb: (id: string) => {
            subMenuListID = id;
            setSubMenuListID(id);
          },
        });
      }
    }
    function cleanSubMenus() {
      ccui.Emitter.emit(Msg.CleanMenu, subMenuListID || '');
      subMenuListID = '';
    }
    const isSelect = ref(false);
    return {
      isSelect,
      menuEl,
      getIsSeparator() {
        return props.data.type === MenuType.Separator;
      },
      getIsMenu() {
        return props.data.type === MenuType.Item || props.data.type === undefined;
      },
      getIconStyle() {
        const style: string[] = [];
        if (props.data.icon || props.data.selected) {
        } else {
          style.push('visibility:hidden');
        }
        return style.join(';');
      },
      getIconClass() {
        if (props.data.selected) {
          return 'icon_yes';
        }
        const icon = toRaw(props.data.icon);
        if (icon) {
          return `icon_${props.data.icon}`;
        } else {
          return '';
        }
      },
      onClick(event: MouseEvent) {
        const item: IUiMenuItem = props.data;
        if (item.enabled === false) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
          return;
        }
        if (item && item.callback) {
          item.callback(props.data, event);
        }
        if (item.items && item.items.length) {
          showSubMenus(event, item);
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
          emitter.emit(Msg.ResetSelect);
          isSelect.value = true;
        } else {
          ccui.Emitter.emit(Msg.ResetMenu);
        }
      },
      onMouseEnter(event: MouseEvent) {
        const item: IUiMenuItem = props.data;
        if (item.enabled === false) {
          return;
        }
        if (item && item.enter) {
          item.enter(props.data);
        }
        if (item.items && item.items.length) {
          // showSubMenus(event, item);
        }
      },
      onMouseLeave() {
        const item: IUiMenuItem = props.data;
        if (item.enabled === false) {
          return;
        }
        if (item && item.leave) {
          item.leave(props.data);
        }
        // cleanSubMenus();
      },
    };
  },
});
</script>

<style scoped lang="less">
.disabled {
  filter: opacity(50%) !important;
}
.separator {
  display: block;
  border-top: 1px solid #d2d2d2;
  margin: 0.2em 0;
}
.ui-menu-item-select {
  background-color: #848484 !important;
}
.ui-menu-item {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 1px 0;
  // cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    background-color: #b0acac;
  }
  .short-key {
    font-size: 12px;
    color: #747474;
    padding: 0 3px 0 6px;
    user-select: none;
    min-width: 50px;
    max-width: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .text {
    flex: 1;
    text-align: left;
    user-select: none;
    white-space: nowrap;
    font-size: 15px;
    line-height: 15px;
    min-width: 100px;
    padding-right: 4px;
    color: black;
  }
  .icon {
    width: 16px;
    max-width: 16px;
    font-size: 16px;
  }
}
</style>
