<template>
  <div id="help" @mouseenter="showDetails = true" @mouseleave="showDetails = true">
    <div class="title">帮助</div>
    <div v-show="showDetails" class="content">
      <Table :items="items">
        <div :index="items[0]">QQ群</div>
        <div :index="items[1]" class="QQ">QQ联系我</div>
        <div :index="items[2]">WeChat</div>
      </Table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Table from './table.vue';
export default defineComponent({
  name: 'cc-help',
  components: { Table },
  props: {
    docUrl: {
      type: String,
      default: '',
    },
  },
  setup(props, ctx) {
    const showDetails = ref(true);
    const items = ref<string[]>(['WeChat', 'QQ', 'QQ群']);
    return {
      items,
      showDetails,
      onClickQQ() {
        const url = 'http://wpa.qq.com/msgrd?v=3&uin=774177933&site=qq&menu=yes';

        // Electron.shell.openExternal(url);
      },
      onClickDoc() {
        const url = 'https://tidys.gitee.io/doc';
      },
    };
  },
});
</script>

<style lang="less" scoped>
#help {
  position: relative;

  .title {
    width: 50px;
    height: 30px;
    border: solid 1px #ccc;
    border-radius: 5px;
  }

  .content {
    position: absolute;
  }

  .QQ {
    background: url('http://wpa.qq.com/pa?p=2:774177933:51');
    width: 77px;
    height: 25px;
  }
}
</style>
