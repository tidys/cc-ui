<template>
  <div class="tree ccui-scrollbar" :style="{ backgroundColor: bgColor }" ref="treeElement" tabindex="0">
    <TreeItem v-for="(item, index) in value" :idx="0" :key="index" :color="bgColor" :value="item" ref="childrenElements"></TreeItem>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, PropType, provide, onMounted, onUnmounted, watch, toRaw } from 'vue';
import { TinyEmitter } from 'tiny-emitter';
import { ITreeData, Msg, ProvideKeys } from './const';
import TreeItem from './tree-item.vue';

export default defineComponent({
  name: 'cc-tree',
  components: { TreeItem },
  emit: ['node-expand', 'node-collapse', 'node-click'],
  props: {
    value: {
      type: Array as PropType<Array<ITreeData>>,
      default: () => [],
      required: true,
    },
    bgColor: {
      type: String,
      default: '#444',
    },
  },
  setup(props, { emit }) {
    let currentSelectTreeItem: ITreeData | null = null;
    function keydownCallback(e: KeyboardEvent) {
      e.preventDefault();
      e.stopPropagation();
      switch (e.key) {
        case 'ArrowUp':
          {
            const ret = findBrother(false);
            if (ret) {
              ret.comp.doSelect();
              const el: HTMLDivElement = ret.comp.$el;
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }
          break;
        case 'ArrowDown':
          {
            const ret = findBrother(true);
            if (ret) {
              ret.comp.doSelect();
              const el: HTMLDivElement = ret.comp.$el;
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }
          break;
        case 'ArrowLeft':
          {
            const ret = getCurrentComponent();
            if (ret) {
              ret.doFold(true);
            }
          }
          break;
        case 'ArrowRight':
          {
            const ret = getCurrentComponent();
            if (ret) {
              ret.doFold(false);
            }
          }
          break;
      }
    }
    onMounted(() => {
      const treeEl = treeElement.value as HTMLElement;
      if (treeEl) {
        treeEl.addEventListener('keydown', keydownCallback);
      }
    });
    onUnmounted(() => {
      const treeEl = treeElement.value as HTMLElement;
      if (treeEl) {
        treeEl.removeEventListener('keydown', keydownCallback);
      }
    });
    function getCurrentComponent() {
      const array = tree2array();
      if (!array.length) {
        return null;
      }

      if (currentSelectTreeItem === null) {
        return null;
      }
      const ret = array.find((item) => item.key === currentSelectTreeItem!.id);
      if (!ret) {
        return null;
      }
      return ret.comp;
    }
    function loop(item: any, array: Array<{ key: string; text: string; comp: typeof TreeItem }> = []) {
      if (!item.fold) {
        for (let i = 0; i < item.childrenElements.length; i++) {
          const child: typeof TreeItem = item.childrenElements[i];
          const value: ITreeData = toRaw(child.value);
          array.push({ key: value.id!, text: value.text, comp: child });
          loop(child, array);
        }
      }
    }
    // 将当前的tree拍平，这样更加方便查找前后节点
    // TODO: 优化性能，当数据发生变化后，重新计算tree2array，不用每次都计算
    function tree2array() {
      const array: Array<{ key: string; text: string; comp: typeof TreeItem }> = [];
      for (let i = 0; i < childrenElements.value.length; i++) {
        const item = childrenElements.value[i];
        const value: ITreeData = toRaw(item.value);
        array.push({ key: value.id!, text: value.text, comp: item });
        loop(item, array);
      }
      // array.forEach((item) => {
      //   console.log(item.text);
      // });
      return array;
    }
    function findBrother(down: boolean) {
      const array = tree2array();
      if (!array.length) {
        return null;
      }
      if (currentSelectTreeItem === null) {
        return array[0];
      }
      const idx = array.findIndex((item) => item.key === currentSelectTreeItem!.id);
      if (idx === -1) {
        return null;
      }
      if (down) {
        const next = array[idx + 1];
        if (next) {
          return next;
        } else {
          return array[0];
        }
      } else {
        const prev = array[idx - 1];
        if (prev) {
          return prev;
        } else {
          return array[array.length - 1];
        }
      }
    }
    const treeElement = ref<HTMLDivElement>();
    const childrenElements = ref<Array<typeof TreeItem>>([]);

    const treeData = ref([]);
    const emitter = new TinyEmitter();
    provide(ProvideKeys.Emitter, emitter);
    provide(ProvideKeys.NodeClick, (data: ITreeData) => {
      currentSelectTreeItem = data;
      emit('node-click', data);
    });
    provide(ProvideKeys.NodeExpand, (data: ITreeData) => {
      emit('node-expand', data);
    });
    provide(ProvideKeys.NodeCollapse, (data: ITreeData) => {
      emit('node-collapse', data);
    });
    return {
      treeData,
      treeElement,
      childrenElements,
      handSelect(index: number = 0) {
        // emitter.emit(Msg.HandSelect, index);
        const len = childrenElements.value.length;
        if (index >= len) {
          return;
        }
        const item = childrenElements.value[index];
        if (item.doSelect) {
          item.doSelect();
        }
      },
    };
  },
});
</script>
<style lang="less" scoped>
.tree {
  user-select: none;
  outline: none;
  overflow: auto;
}
</style>
