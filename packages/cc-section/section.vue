<template>
  <div class="cc-section">
    <div class="header">
      <div class="left" @click.stop="onExpand">
        <div class="fold" :class="expand ? 'arrow-down' : 'arrow-right'"></div>
        <div class="title">{{ name }}</div>
      </div>
      <slot name="header"></slot>
    </div>
    <div v-show="expand" style="flex: 1; display: flex; flex-direction: column">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, toRaw, watch } from 'vue';

export default defineComponent({
  name: 'CCSection',
  props: {
    name: {
      type: String,
    },
    expand: {
      type: Boolean,
      default: true,
    },
  },
  emit: ['change'],
  setup(props, { emit }) {
    const expand = ref(props.expand || false);
    watch(
      () => props.expand,
      (v) => {
        expand.value = !!v;
      }
    );
    const name = ref(props.name || '');
    watch(
      () => props.name,
      (v) => {
        name.value = v || '';
      }
    );
    return {
      expand,
      name,
      onExpand() {
        expand.value = !expand.value;
        emit('change', toRaw(expand.value));
      },
    };
  },
});
</script>
<style scoped lang="less">
.cc-section {
  .header {
    height: 26px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    border-bottom: 1px solid #666666;
    color: #bdbdbd;

    .left {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .title {
      //color: #bdbdbd;
      color: #11ff00;
      user-select: none;
      font-size: 12px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .fold {
      margin: 0 3px;
    }

    .arrow-right {
      border: 4px solid transparent;
      border-left: 8px solid #bdbdbd;
      border-right: 0;
    }

    .arrow-down {
      border: 4px solid transparent;
      border-top: 7px solid #bdbdbd;
      border-bottom: 0;
    }
  }
}
</style>
