<template>
  <div id="table">
    <div class="head">
      <div @click="onClickTab(item, index)" class="item" v-for="(item, index) in items" :key="index">{{ item }}</div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType, defineComponent, h, onMounted, renderSlot } from 'vue';
export default defineComponent({
  name: 'my-table',
  props: {
    items: {
      type: Array as PropType<string[]>,
      default: () => {
        return [];
      },
    },
  },
  setup(props, { slots }) {
    onMounted(() => {});
    return {
      // 可以考虑使用inject，provide实现
      onClickTab(item: string, index: any) {
        index = parseInt(index);
        console.log(item, index);
        if (slots.default) {
          const slotsDefault = slots.default();
          for (let i = 0; i < slotsDefault.length; i++) {
            const slot = slotsDefault[i];
            if (slot.el) {
              if (slot.props?.index === item) {
                slot.el.style.display = 'block';
              } else {
                slot.el.style.display = 'none';
              }
            }
          }
          console.log(slots.default());
        }
      },
    };
  },
});
</script>
<style scoped lang="less">
#table {
  user-select: none;
  display: flex;
  flex-direction: column;

  .head {
    display: flex;
    flex-direction: row;

    .item {
      padding: 2px 4px;
      width: 60px;

      border-top: 1px solid black;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      &:hover {
        background-color: rebeccapurple;
      }

      &:first-child {
        border-left: 1px solid black;
      }
    }
  }

  .content {
    display: flex;
  }
}
</style>
