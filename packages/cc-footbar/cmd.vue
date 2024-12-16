<template>
  <div class="cmd" @click.prevent.stop="onClick" :title="data.title || ''">
    <div>{{ data.label }}</div>
    <div :class="iconClass()" style="font-size: 20px; width: 20px; height: 20px"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { showCommand } from '../cc-command/const';
import { FootCmd } from './const';
export default defineComponent({
  name: 'cmd',
  props: {
    data: {
      type: Object as PropType<FootCmd>,
      required: true,
    },
  },
  setup(props, ctx) {
    return {
      onClick() {
        if (props.data.cb) {
          props.data.cb();
        }
        if (props.data && props.data.cmds && props.data.cmds.length > 0) {
          showCommand(props.data.cmds);
        }
      },
      iconClass() {
        if (props.data && props.data.icon) {
          return `iconfont icon_${props.data.icon}`;
        } else {
          return 'hide';
        }
      },
    };
  },
});
</script>
<style lang="less">
.cmd {
  user-select: none;
  color: white;
  cursor: pointer;
  padding: 0 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgb(152, 152, 152);
  }

  .hide {
    display: none;
  }
}
</style>
