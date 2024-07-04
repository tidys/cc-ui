<template>
  <div class="root">
    <CCProp name="default">
      <CCColor></CCColor>
    </CCProp>
    <CCProp name="offset">
      <div style="flex: 1; margin-left: 20px; display: flex; flex-direction: column">
        <CCColor></CCColor>
      </div>
    </CCProp>
    <CCProp name="change color">
      <CCColor :color="color"></CCColor>
      <CCButton @click="onChangeColor">random</CCButton>
    </CCProp>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ccui from '../packages/index';
const { CCColor, CCButton, CCProp } = ccui.components;
export default defineComponent({
  name: 'case-color',
  components: { CCColor, CCButton, CCProp },
  setup(props, ctx) {
    const color = ref('red');
    return {
      color,
      onChangeColor() {
        // random color
        const v = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        console.log(v);
        color.value = v;
      },
    };
  },
});
</script>

<style scoped lang="less">
.root {
  display: flex;
  flex-direction: column;
}
</style>
