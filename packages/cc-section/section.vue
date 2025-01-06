<template>
  <div class="cc-section">
    <div class="header" :class="{ cursor: expandByFullHeader }" @click.stop="onClickHeader" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
      <div class="left" @click.stop="onExpand">
        <div class="fold" :class="expand ? 'arrow-down' : 'arrow-right'"></div>
        <slot name="title"></slot>
        <div class="title">{{ name }}</div>
      </div>
      <slot name="header" v-if="visibleSlotHeader"></slot>
    </div>
    <div v-show="expand" class="content">
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
    /**
     * 鼠标移动到header时，鼠标移入显示slot header，鼠标离开隐藏slot header
     */
    autoSlotHeader: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否点击整个header控制折叠，默认只会点击标题才会
     */
    expandByFullHeader: {
      type: Boolean,
      default: false,
    },
  },
  emit: ['change'],
  setup(props, { emit }) {
    const expand = ref(props.expand || false);
    const visibleSlotHeader = ref(true);
    if (props.autoSlotHeader) {
      visibleSlotHeader.value = false;
    }
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
    function onExpand() {
      expand.value = !expand.value;
      emit('change', toRaw(expand.value));
    }
    return {
      expand,
      visibleSlotHeader,
      name,
      onMouseEnter() {
        if (props.autoSlotHeader) {
          visibleSlotHeader.value = true;
        }
      },
      onMouseLeave() {
        if (props.autoSlotHeader) {
          visibleSlotHeader.value = false;
        }
      },
      onExpand,
      onClickHeader() {
        if (props.expandByFullHeader) {
          onExpand();
        }
      },
    };
  },
});
</script>
<style scoped lang="less">
.cc-section {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .content {
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
  }
  .cursor {
    cursor: pointer;
  }
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
