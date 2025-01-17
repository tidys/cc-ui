<template>
  <div class="ui-menu-item" @mousedown.capture.stop.prevent="onClick">
    <i :style="getIconStyle()" :class="getIcon()" class="icon"></i>
    <span class="text">{{ data.name }}</span>
    <div class="short-key" v-if="data.shortKey">{{ data.shortKey }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRaw } from 'vue';
import { IUiMenuItem } from './const';

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
      getIconStyle() {
        const style: string[] = [];
        const icon = toRaw(props.data.icon);
        if (icon) {
        } else {
          style.push('visibility:hidden');
        }
        return style.join(';');
      },
      getIcon() {
        const icon = toRaw(props.data.icon);
        if (icon) {
          return `iconfont icon_${props.data.icon}`;
        } else {
          return '';
        }
      },
      onClick() {
        const item: IUiMenuItem = props.data;
        if (item.enabled === false) {
          return;
        }
        if (item && item.callback) {
          item.callback(props.data);
        }
      },
    };
  },
});
</script>

<style scoped lang="less">
.ui-menu-item {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 2px 0;
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
  }
  .text {
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
