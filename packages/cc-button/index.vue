<template>
  <div class="btn" @click.stop="onClick"
       @mouseup="onMouseup"
       @mousedown="onMousedown"
       @mouseenter="onMouseenter"
       @mouseleave="onMouseleave"
       :class="{'click':isClick}"
  >
    <div class="text">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, ref, reactive} from 'vue';
import chroma from 'chroma-js';

export default defineComponent({
  name: 'CCButton',
  emits: ['confirm'],
  props:['color'],
  setup(props, {emit}) {
    const color =props.color|| '#7d7d7d';
    const theme = {color};
    const isClick = ref(false);
    const isHover = ref(false);
    return {
      color,
      theme,
      isClick,
      onMouseup() {
        isClick.value = false;
        theme.color = color;
      },
      onMousedown() {
        isClick.value = true;
        theme.color = chroma(color).darken().hex();
      },
      onMouseenter() {
        isHover.value = true;
        theme.color = chroma(color).brighten().hex();
      },
      onMouseleave() {
        isHover.value = false;
        theme.color = color;
      },
      onClick() {
        emit('confirm');
      },
    };
  },
});
</script>

<style>
.btn {
  box-sizing: border-box;
  min-width: 100px;
  height: 26px;
  background: v-bind(color);
  border: 1px solid #171717;
  border-radius: 5px;
  font-family: -apple-system;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 18px;
  margin: 0 1px;
  cursor: pointer;


}

.click {
  border-color: #fd942b;
}
</style>
