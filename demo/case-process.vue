<template>
  <CCProcess :percent="percent"> </CCProcess>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import ccui from '../packages/index';
const { CCProcess } = ccui.components;
export default defineComponent({
  name: 'case-process',
  components: { CCProcess },
  setup(props, ctx) {
    const percent = ref(100);
    setInterval(() => {
      // return;
      percent.value += 10;
      if (percent.value > 100) {
        percent.value = 0;
      }
    }, 2000);
    return {
      percent,
    };
  },
});
</script>
<style lang="less" scoped></style>
