<template>
  <Teleport to="body">
    <div class="command" v-if="show">
      <div class="items" @mouseup.prevent.stop>
        <Item v-for="(item, index) in commands" :key="index" :data="item"></Item>
      </div>
    </div>
  </Teleport>
</template>
<script lang="ts">
import { ref, defineComponent, PropType, onMounted, onUnmounted } from 'vue';
import Item from './item.vue';
import { CmdData, CmdMsg } from './const';
import ccui from '../index';
export default defineComponent({
  name: 'command',
  components: { Item },
  props: {
    items: {
      type: Array as PropType<CmdData[]>,
      default: () => {
        return [];
      },
    },
  },
  setup(props, ctx) {
    function filterCommands(cmdArray: CmdData[]) {
      const ret: CmdData[] = [];

      for (let i = 0; i < cmdArray.length; i++) {
        const item = cmdArray[i];
        if (!(item.visible === false)) {
          ret.push(item);
        }
      }
      return ret;
    }
    const show = ref(false);
    const commands = ref<CmdData[]>(filterCommands(props.items));

    function closeCmd() {
      commands.value = [];
      show.value = false;
    }
    function doCmd(cmdArray: CmdData[]) {
      show.value = true;
      commands.value = filterCommands(cmdArray);
    }

    document.addEventListener('mouseup', () => {
      closeCmd();
    });

    onMounted(() => {
      ccui.Emitter.on(CmdMsg.ShowCmd, doCmd);
      ccui.Emitter.on(CmdMsg.CloseCmd, closeCmd);
    });
    onUnmounted(() => {
      ccui.Emitter.off(CmdMsg.ShowCmd, doCmd);
      ccui.Emitter.off(CmdMsg.CloseCmd, closeCmd);
    });
    return {
      show,
      commands,
    };
  },
});
</script>
<style scoped lang="less">
.command {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .items {
    border: 1px solid #797979;
    padding: 1px 3px;
    background-color: #444;
    max-width: 50%;
    min-width: 50%;
    // max-height: 30%;
    height: 100px;
    overflow-y: scroll;
  }

  .items::-webkit-scrollbar {
    width: 5px;
    height: 1px;
  }

  .items::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #d3d3d3;
  }

  .items::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #5e5e5e;
  }
}
</style>