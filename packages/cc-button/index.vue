<template>
  <div class="btn"> this button</div>
</template>
<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component({
  name: 'CCButton',
})
export default class CCButton extends Vue {
  @Prop()
  private msg!: string;
}
</script>

<style scoped>
.btn {
  width: 100px;
  height: 60px;
  background-color: rebeccapurple;
}
</style>
