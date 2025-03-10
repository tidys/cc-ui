<template>
  <div v-if="getIsSeparator()" class="separator"></div>
  <div v-if="getIsMenu()" class="ui-menu-item" :class="{ disabled: data.enabled === false }" @mousedown="onClick" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" :title="data.tip || ''">
    <i :style="getIconStyle()" :class="getIconClass()" class="iconfont icon"></i>
    <span class="text">{{ data.name }}</span>
    <div class="short-key" v-if="data.shortKey">{{ data.shortKey }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRaw } from 'vue';
import { IUiMenuItem, MenuType, Msg } from './const';
import ccui from '../index';

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
    return {
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
        ccui.Emitter.emit(Msg.HideMenu);
      },
      onMouseEnter() {
        const item: IUiMenuItem = props.data;
        if (item.enabled === false) {
          return;
        }
        if (item && item.enter) {
          item.enter(props.data);
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
  }

  .text {
    text-align: left;
    user-select: none;
    white-space: nowrap;
    font-size: 15px;
    line-height: 15px;
    min-width: 100px;
    color: black;
  }
  .icon {
    width: 16px;
    max-width: 16px;
    font-size: 16px;
  }
}
</style>
