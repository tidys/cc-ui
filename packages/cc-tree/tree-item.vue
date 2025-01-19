<template>
  <div class="tree-item" ref="rootEl">
    <div class="content" :class="{ flash: isFlash }" @contextmenu.prevent="" @click="onClick" @mouseenter="mouseEnter" @mouseleave="mouseLeave" :style="{ 'background-color': backgroundColor, 'padding-left': `${indent * 15}px` }">
      <div class="icon" :class="getIconClass()" :style="getIconStyle()" @click.stop.prevent="onFold"></div>
      <div class="name" :style="getNameStyle()">
        {{ value.text }}
      </div>
    </div>
    <div v-show="!fold && value.children">
      <cc-tree-item ref="childrenElements" v-for="(item, index) in value.children" :key="index" :value="item" :indent="indent + 1"></cc-tree-item>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, toRaw, defineComponent, PropType, inject, onMounted, onUnmounted, watch, nextTick } from 'vue';
import { ITreeData, ProvideKeys, Msg } from './const';
import { TinyEmitter } from 'tiny-emitter';
import color from 'color';
import { generate } from 'short-uuid';
export default defineComponent({
  name: 'cc-tree-item',
  props: {
    value: {
      type: Object as PropType<ITreeData>,
      default: () => ({
        text: '',
      }),
      required: true,
    },
    indent: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: '#444',
    },
  },
  setup(props, { emit }) {
    const id = props.value?.id;
    props.value.id = id === undefined ? generate() : id;
    const emitter = inject(ProvideKeys.Emitter) as TinyEmitter;
    const NodeClick = inject(ProvideKeys.NodeClick, (data: ITreeData | null) => {});
    const NodeUnclick = inject(ProvideKeys.NodeUnclick, (data: ITreeData | null) => {});
    const NodeEnter = inject(ProvideKeys.NodeEnter, (data: ITreeData | null) => {});
    const NodeLeave = inject(ProvideKeys.NodeLeave, (data: ITreeData | null) => {});
    const CurrentSelect = inject<() => ITreeData | null>(ProvideKeys.CurrentSelect, () => {
      return null;
    });
    const NodeCollapse = inject(ProvideKeys.NodeCollapse, (data: ITreeData) => {});
    const NodeExpand = inject(ProvideKeys.NodeExpand, (data: ITreeData) => {});
    let expandAll = inject(ProvideKeys.DefaultExpandAll, true);
    const checkExpand = inject(ProvideKeys.CheckExpand, (id: string) => {
      return expandAll;
    });
    if (checkExpand(props.value.id)) {
      expandAll = true;
    }
    const fold = ref(!expandAll);
    watch(
      () => props.value,
      (v) => {
        if (v.id) {
          const b = !checkExpand(v.id);
          changeFold(b);
        }
      }
    );
    const backgroundColor = ref(props.color);
    const bgColor = toRaw(props.color);
    const colorHover = color(bgColor).lighten(0.5).hex();
    const colorSelected = color(bgColor).lighten(1).hex();

    const colorName = '#ccc';
    const colorNameHidden = color(colorName).darken(0).hex();
    let isHover = false;
    let selected = false;
    const selectedTreeItem = CurrentSelect();
    if (selectedTreeItem && selectedTreeItem.id === props.value.id) {
      selected = true;
      updateBgColor();
    }
    function doSelect(scroll: boolean = false) {
      if (selected) {
        return;
      }
      emitter.emit(Msg.SelectReset);
      selected = true;
      updateBgColor();
      NodeClick(toRaw(props.value));
      if (scroll && rootEl.value) {
        rootEl.value.scrollIntoView({ behavior: 'smooth' });
      }
    }
    function selectReset() {
      if (selected) {
        NodeUnclick(toRaw(props.value));
      }
      selected = false;
      updateBgColor();
    }
    function updateSelect(id: string) {
      if (id === props.value.id) {
        doSelect(true);
      } else {
        selectReset();
      }
    }
    function handExpand(idArray: string[], options: { select?: boolean; highlight?: boolean } = {}) {
      const id = toRaw(props.value.id || '');
      if (idArray.includes(id)) {
        if (fold.value === true) {
          changeFold(false);
          // v-if需要这种方式处理
          // nextTick(() => {
          //   // 能实现功能，但是会产生大量的调用，可能存在性能压力，主要就是无法调用到子组件
          //   emitter.emit(Msg.HandExpand, idArray);
          // });
        }
        if (id === idArray[idArray.length - 1]) {
          if (options.select) {
            doSelect();
          }
          if (options.highlight) {
            isFlash.value = true;
            setTimeout(() => {
              isFlash.value = false;
            }, 400);
          }
        }
      }
    }
    onMounted(() => {
      emitter.on(Msg.SelectReset, selectReset);
      emitter.on(Msg.UpdateSelect, updateSelect);
      emitter.on(Msg.HandExpand, handExpand);
    });
    onUnmounted(() => {
      emitter.off(Msg.SelectReset, selectReset);
      emitter.off(Msg.UpdateSelect, updateSelect);
      emitter.off(Msg.HandExpand, handExpand);
    });
    function updateBgColor() {
      if (selected) {
        backgroundColor.value = colorSelected;
        return;
      }
      if (isHover) {
        backgroundColor.value = colorHover;
        return;
      }
      backgroundColor.value = props.color;
    }
    const childrenElements = ref([]);

    function changeFold(b: boolean) {
      if (fold.value === b) {
        return;
      }

      fold.value = b;
      const data = toRaw(props.value);
      if (fold.value) {
        NodeCollapse(data);
      } else {
        NodeExpand(data);
      }
    }
    function doFold(b: boolean) {
      if (b === fold.value) {
        return;
      }
      changeFold(b);
    }

    const rootEl = ref<HTMLDivElement>();
    const isFlash = ref<boolean>(false);
    return {
      isFlash,
      rootEl,
      childrenElements,
      fold,
      backgroundColor,
      selected,
      doFold,
      doSelect,
      onFold() {
        changeFold(!fold.value);
      },
      mouseEnter() {
        isHover = true;
        updateBgColor();
        NodeEnter(toRaw(props.value));
      },
      mouseLeave() {
        isHover = false;
        updateBgColor();
        NodeLeave(toRaw(props.value));
      },
      onClick() {
        doSelect();
      },
      getIconClass() {
        if (fold.value) {
          return 'iconfont icon_arrow_right';
        } else {
          return 'iconfont icon_arrow_down';
        }
      },
      getIconStyle() {
        const b = props.value.children?.length || props.value.childrenCount;
        const visible = b ? 'visible' : 'hidden';
        return `visibility: ${visible}`;
      },
      getNameStyle() {
        let active = toRaw(props.value.active);
        if (active === undefined) {
          active = true;
        }
        const ret: string[] = [];
        ret.push(`color:${active ? colorName : colorNameHidden}`);
        if (!active) {
          // 暂时使用creator的配色样式
          ret.push(`opacity:0.4`);
        }
        return ret.join(';');
      },
    };
  },
});
</script>
<style lang="less" scoped>
.tree-item {
  user-select: none;
  .flash {
    background-color: rgb(117, 117, 117) !important;
    animation: flash 0.2s linear 2;
  }
  @keyframes flash {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
  .content {
    display: flex;
    align-items: center;
    flex-direction: row;
    user-select: none;
    .icon {
      color: #ccc;
      cursor: pointer;
      margin-right: 3px;
    }
    .name {
      font-family: BlinkMacSystemFont, 'Helvetica Neue', Helvetica, 'Lucida Grande', 'Segoe UI', Ubuntu, Cantarell, SourceHanSansCN-Normal, Arial, sans-serif;
    }
  }
}
</style>
