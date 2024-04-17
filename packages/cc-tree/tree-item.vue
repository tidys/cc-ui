<template>
  <div class="tree-item">
    <div class="content" @contextmenu.prevent="" @click="onClick" @mouseenter="mouseEnter" @mouseleave="mouseLeave" :style="{ 'background-color': backgroundColor, 'padding-left': `${indent * 15}px` }">
      <div class="icon" :class="getIconClass()" :style="getIconStyle()" @click.stop.prevent="onFold"></div>
      <div class="name" :style="getNameStyle()">
        {{ value.text }}
      </div>
    </div>
    <div v-if="!fold">
      <cc-tree-item ref="childrenElements" v-for="(item, index) in value.children" :key="index" :value="item" :indent="indent + 1"></cc-tree-item>
    </div>
  </div>
  <!-- <el-tree
          :default-expanded-keys="expandedKeys"
          :filter-node-method="filterNode"
          node-key="uuid">
</el-tree> -->
</template>
<script lang="ts">
import { ref, toRaw, defineComponent, PropType, inject, onMounted, onUnmounted } from 'vue';
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
    const NodeClick = inject(ProvideKeys.NodeClick, (data: ITreeData) => {});
    const NodeCollapse = inject(ProvideKeys.NodeCollapse, (data: ITreeData) => {});
    const NodeExpand = inject(ProvideKeys.NodeExpand, (data: ITreeData) => {});

    const fold = ref(false);
    const backgroundColor = ref(props.color);
    const bgColor = toRaw(props.color);
    const colorHover = color(bgColor).lighten(0.5).hex();
    const colorSelected = color(bgColor).lighten(1).hex();

    const colorName = '#ccc';
    const colorNameHidden = color(colorName).darken(0).hex();
    let isHover = false;
    let selected = false;

    function selectReset() {
      selected = false;
      updateBgColor();
    }
    onMounted(() => {
      emitter.on(Msg.SelectReset, selectReset);
    });
    onUnmounted(() => {
      emitter.off(Msg.SelectReset, selectReset);
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
    function doSelect() {
      emitter.emit(Msg.SelectReset);
      selected = true;
      updateBgColor();
      NodeClick(toRaw(props.value));
    }
    return {
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
      },
      mouseLeave() {
        isHover = false;
        updateBgColor();
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
