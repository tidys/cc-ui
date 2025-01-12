<template>
  <div style="display: flex; flex: 1; width: 100%; height: 100%">
    <CCDock> dock content </CCDock>
    <CCDock>
      dock content
      <template v-slot:title> slot:title </template>
    </CCDock>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { CCDock } from '../packages/cc-dock';

export default defineComponent({
  name: 'case-dock',
  components: { CCDock },
  setup(props, ctx) {
    return {};
  },
});
</script>
