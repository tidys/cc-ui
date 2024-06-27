<template>
  <div style="display: flex; flex-direction: row; align-items: center">
    <CCButtonGroup :choose-item="chooseItem" :recover="true" :items="buttonGroup"> </CCButtonGroup>
    <CCButton @click="onHideBtnGroupFirst">visible btnGroup 1</CCButton>
    <CCButton @click="onChangeBtnGroupChoose">change choose</CCButton>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import ccui from '../packages/index';
import { ButtonGroupItem } from '../packages/cc-button-group/const';
const { CCButtonGroup } = ccui.components;
export default defineComponent({
  name: 'case1',
  components: { CCButtonGroup },
  setup(props, ctx) {
    const btnGroupData1: ButtonGroupItem = reactive({
      text: '1',
      title: '1',
      icon: 'icon_move',
      visible: true,
      click() {
        console.log('icon_move');
      },
    });
    const buttonGroupData: ButtonGroupItem[] = [
      btnGroupData1,
      {
        icon: 'icon_up_right_arrow',
        click: () => {
          console.log('icon_up_right_arrow');
        },
      },
      {
        icon: 'icon_resize',
        click: () => {
          console.log('icon_resize');
        },
      },
      {
        icon: 'icon_magic',
      },
      {
        icon: 'icon_book',
      },
    ];
    const buttonGroup = ref<ButtonGroupItem[]>(buttonGroupData);
    const chooseItem = ref<ButtonGroupItem>(buttonGroupData[0]);
    if (false) {
      for (let i = 0; i < 4; i++) {
        buttonGroupData.push({
          text: `text text text text${i}`,
          title: `title${i}`,
          click() {
            console.log(i);
          },
        });
      }
    }
    return {
      onHideBtnGroupFirst() {
        btnGroupData1.visible = !btnGroupData1.visible; // 无效
      },
      buttonGroup,
      chooseItem,
      onChangeBtnGroupChoose() {
        chooseItem.value = buttonGroupData[2];
      },
    };
  },
});
</script>
<style scoped lang="less"></style>
