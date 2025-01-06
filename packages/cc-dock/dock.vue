<template>
  <div class="dock">
    <div class="tab">
      <span>
        {{ name }}
      </span>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'dock',
  props: {
    name: {
      type: String,
      default: 'dock',
    },
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped>
.dock {
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #3a3a3a;
    color: white;
    overflow: hidden;
  }
  .tab {
    user-select: none;
    max-width: 100px;
    height: 24px;
    color: #ccc;
    background: #fff;
    padding: 0 10px 0 8px;
    box-sizing: border-box;
    border-right: 1ps solid;
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: #2b2b2b;
    &:hover {
      color: #3a3a3a;
      background-color: #1f1f1f;
    }
    &:active {
      color: '#00f';
      background-color: rgb(114, 114, 114);
    }
    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #ccc;
    }
  }
}
</style>
