<template>
  <Teleport to="body">
    <div class="command" v-if="show">
      <div class="items ccui-scrollbar" @mouseup.prevent.stop>
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
    box-shadow: 0px 2px 19px 4px rgb(0 0 0);
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
}
</style>
