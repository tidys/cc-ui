<template>
  <div style="display: flex; flex-direction: column">
    {{ data }}
    <CCButton @click="onClose">close</CCButton>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ccui from '../packages/index';
const { CCColor, CCButton, CCProp } = ccui.components;
export default defineComponent({
  name: 'case-dialog-custom',
  components: { CCColor, CCButton, CCProp },
  props: {
    id: String,
    data: String,
  },
  setup(props, ctx) {
    return {
      onClose() {
        ctx.emit('close');
      },
    };
  },
});
</script>
