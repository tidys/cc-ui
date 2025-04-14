<template>
  <div class="case-textarea">
    <CCProp name="textarea">
      <CCTextarea value="111" :readonly="false" @change="onChangeTextarea"></CCTextarea>
    </CCProp>
    <CCProp name="readonly">
      <CCTextarea :value="msg" :auto-scroll="autoScroll" :readonly="true" @change="onChangeTextarea"></CCTextarea>
    </CCProp>
    <div class="btns">
      <CCButton @click="addMsg">add msg</CCButton>
      <CCCheckBox label="自动滚动到底部" :value="autoScroll" @change="onChangeAutoScroll"></CCCheckBox>
    </div>
  </div>
</template>

<script lang="ts">
import { read } from '@popperjs/core';
import { defineComponent, ref } from 'vue';
import ccui from '../packages/index';
const { CCTextarea, CCProp, CCButton, CCCheckBox } = ccui.components;
export default defineComponent({
  name: 'case-textarea',
  components: { CCTextarea, CCProp, CCButton, CCCheckBox },
  setup(props, ctx) {
    const onChangeTextarea = (e: any) => {
      console.log(e);
    };
    const msg = ref('readonly');
    const autoScroll = ref(true);
    let i = 0;
    return {
      msg,
      autoScroll,
      addMsg() {
        i++;
        msg.value += `${i}\n`;
      },
      onChangeAutoScroll(v: boolean) {
        autoScroll.value = v;
      },
      onChangeTextarea(v: string) {
        console.log(v);
      },
    };
  },
});
</script>

<style scoped lang="less">
.case-textarea {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .btns {
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
