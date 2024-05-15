<template>
  <div class="ui-menu-item" @mousedown.capture.stop.prevent="onClick">
    <span class="text">{{ data.name }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
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
  cursor: pointer;
  &:hover {
    background-color: #b0acac;
  }
  .text {
    user-select: none;
    white-space: nowrap;
    font-size: 15px;
    line-height: 15px;
    color: black;
  }
}
</style>
