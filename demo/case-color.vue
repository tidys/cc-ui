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
    <CCProp name="disabled">
      <CCColor :color="color" :disabled="true"></CCColor>
    </CCProp>
  </div>
</template>

<script lang="ts">
import colorIns from 'color';
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
        const c = colorIns({
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        });
        const v = c.hex();
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
