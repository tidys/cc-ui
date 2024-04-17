<template>
  <div class="ui-menu-item" @mousedown.capture.stop.prevent="onClick">
    <span style="white-space: nowrap">{{ data.name }}</span>
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
  cursor: pointer;

  span {
    user-select: none;
  }
}

.ui-menu-item:hover {
  background-color: #b0acac;
}
</style>
