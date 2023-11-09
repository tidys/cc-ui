<template>
  <div class="item" @mouseenter.prevent.stop="onMouseEnter" @mouseleave.prevent.stop="onMouseLeave" @click.prevent.stop="onClick">
    {{ data.label }}
  </div>
</template>
<script lang="ts">
import { closeCommand } from './const';
import { CmdData } from './const';
import { ref, defineComponent, PropType } from 'vue';
export default defineComponent({
  name: 'item',
  props: {
    data: {
      type: Object as PropType<CmdData>,
      required: true
    }
  },
  setup(props, ctx) {
    return {
      onMouseEnter() {},
      onMouseLeave() {},
      onClick() {
        const { cb, url } = props.data;
        if (url) {
          window.open(url);
        } else {
          if (cb) {
            cb();
          }
        }
        closeCommand();
      }
    };
  }
});
</script>

<style scoped lang="less">
.item {
  user-select: none;
  height: 25px;
  color: rgb(223, 223, 223);
  background-color: #444;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  word-break: break-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  &:hover {
    background-color: #333;
  }
}

.item-selected {
  background-color: red;
}
</style>
