<template>
  <CCButton @click="onShowDialog">btn</CCButton>
  <CCDialog></CCDialog>
  <!-- <CCInputNumber></CCInputNumber> -->
  <!-- <Help></Help> -->
  <!--  <div style="display: flex;flex-direction: column;">-->
  <!--    <CCSection name="TEST">-->
  <!--      <template v-slot:header>-->
  <!--        <div style="display: flex;flex:1;flex-direction: row;justify-content: flex-end;">-->
  <!--          <CCButton>a</CCButton>-->
  <!--          <CCButton>b</CCButton>-->
  <!--        </div>-->
  <!--      </template>-->
  <!--      <div>-->
  <!--        <CCProp name="input" tooltip="测试tooltip">-->
  <!--          <CCInput @change="onChangeText" v-model:value="value"></CCInput>-->
  <!--        </CCProp>-->
  <!--        <CCProp name="disabled" tooltip="测试禁用">-->
  <!--          <CCInput :disabled="true" value="disabled"></CCInput>-->
  <!--        </CCProp>-->
  <!--        <CCProp name="readonly" tooltip="1111111 1111111111111111111111111111111111">-->
  <!--          <CCInput :readonly="true" value="readonly"></CCInput>-->
  <!--        </CCProp>-->
  <!--        <CCProp name="readonly && disabled"-->
  <!--                tooltip="test tooltip 1111111111111111111111144444444444444444444444444444444441111444444444444444444444444444444444444444444444444411111111111">-->
  <!--          <CCInput :disabled="true" :readonly="true" value="readonly"></CCInput>-->
  <!--        </CCProp>-->
  <!--        <CCProp name="test2">-->
  <!--          <CCSelect-->
  <!--              @change="onChangeSelect"-->
  <!--              :data="selectData"-->
  <!--              v-model:value="selectValue">-->
  <!--          </CCSelect>-->
  <!--        </CCProp>-->
  <!--      </div>-->
  <!--    </CCSection>-->
  <!--    <CCSection :expand="false" name="测试折叠">-->
  <!--      默认不展开-->
  <!--    </CCSection>-->
  <!--    <CCProp name="iconfont">-->
  <!--      <i class="iconfont icon-refresh"></i>-->
  <!--      <div class="iconfont icon-doc"></div>-->
  <!--    </CCProp>-->
  <!--    <CCProp name="color1">-->
  <!--      <CCColor></CCColor>-->
  <!--    </CCProp>-->
  <!--    <CCProp name="color2">-->
  <!--      <CCColor></CCColor>-->
  <!--    </CCProp>-->
  <!--    <CCProp name="input number">-->
  <!--      <CCInputNumber :value="1" :min="0"></CCInputNumber>-->
  <!--    </CCProp>-->
  <!--    <div style="height: 100px;">-->

  <!--    </div>-->
  <!--    <CCProp name="textarea" align="flex-start;">-->
  <!--      <CCTextarea data="111" @change="onChangeTextarea"></CCTextarea>-->
  <!--    </CCProp>-->
  <!--  </div>-->
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import ccui from '../packages/index';
import { DialogUrlData, DialogOptions } from '../packages/cc-dialog/const';
const { CCColor, CCButton, Help, CCInputNumber, CCDialog }=ccui.components;
export default defineComponent({
  name: 'app',
  components: { CCColor, CCButton, Help, CCInputNumber, CCDialog },
  setup() {
    const value = ref('123');
    const selectData = ref([
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 }
    ]);
    const selectValue = ref('1');
    onMounted(() => {
      setTimeout(() => {
        value.value = '456';
        selectValue.value = '3';
        selectData.value.push({ label: '4', value: 4 });
      }, 1000);
    });
    return {
      onShowDialog() {
        const data: DialogUrlData = new DialogUrlData();
        data.url = 'http://www.cocos.com';
        data.label = '访问{cocos}官网';
        const opts: DialogOptions = { data };
        ccui.dialog.showDialog(opts);
      },
      selectData,
      selectValue,
      value,
      onChangeText() {
        console.log(value.value);
      },
      onChangeSelect() {
        console.log(selectValue.value);
      },
      onChangeTextarea(v) {
        console.log(v);
      }
    };
  }
});
</script>
<style>
body {
  overflow: hidden;
}
</style>
