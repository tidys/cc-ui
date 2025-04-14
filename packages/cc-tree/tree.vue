<template>
  <div class="root">
    <div class="search" v-if="search">
      <CCInput v-model:value="searchValue" @key-up="onKeyUp" @key-down="onKeyDown" @key-enter="onKeyEnter" @input="onInput" @change="onInputChange" ref="searchInput" placeholder="search">
        <i class="iconfont icon_font_size case" :class="{ 'case-active': matchCase }" @click="onChangeMatchCase" title="match cases"></i>
        <i class="case" :class="{ 'case-active': pathSplit }" title="split path" @click="onChangePathSplit"> /</i>
        <i v-if="expandAll" class="iconfont icon_expand_all case" title="expand" @click="onRootExpandAll"></i>
        <i v-else class="iconfont icon_collapse_all case" title="collapse" @click="onRootCollapseAll"></i>
      </CCInput>
    </div>
    <div class="tree ccui-scrollbar" :style="{ backgroundColor: bgColor }" ref="treeElement" tabindex="0">
      <TreeItem v-for="(item, index) in value" :idx="0" :key="index" :alway-response-click="alwayResponseClick" :color="bgColor" :value="item" ref="childrenElements"></TreeItem>
    </div>
  </div>
</template>

<script lang="ts">
import { TinyEmitter } from 'tiny-emitter';
import { defineComponent, nextTick, onMounted, onUnmounted, PropType, provide, ref, toRaw, watch } from 'vue';
import { HandExpandOptions, ITreeData, MatchRoute, Msg, ProvideKeys } from './const';
import TreeItem from './tree-item.vue';
import { throttle } from 'lodash';
import CCInput from '../cc-input/input.vue';
/**Tree拍平后的数据 */
interface ClapItem {
  key: string;
  text: string;
  comp: typeof TreeItem;
}

export default defineComponent({
  name: 'cc-tree',
  components: { TreeItem, CCInput },
  emit: ['node-expand', 'node-collapse', 'node-click', 'node-unclick', 'node-enter', 'node-leave', 'node-menu', 'do-search'],
  props: {
    value: {
      type: Array as PropType<Array<ITreeData>>,
      default: () => [],
      required: true,
    },
    /**
     * 是否显示icon
     */
    showIcon: {
      type: Boolean,
      default: false,
    },
    /**
     * 背景色
     */
    bgColor: {
      type: String,
      default: '#444',
    },
    /**
     * 默认是否都展开
     */
    defaultExpandAll: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否开启搜索
     */
    search: {
      type: Boolean,
      default: false,
    },
    /**
     * 对searchkey进行加工处理，比如想要将输入的uuid置换为fspath
     */
    searchKeyProcessFunction: {
      type: Function,
      default: (key: string) => {
        return key;
      },
    },
    /**
     * 默认展开的keys
     */
    expandKeys: {
      type: Array as PropType<Array<string>>,
      default: () => [],
    },
    /**
     * 选中后，再点击是否响应点击事件
     */
    alwayResponseClick: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    provide(ProvideKeys.DefaultExpandAll, toRaw(props.defaultExpandAll));
    provide(ProvideKeys.CheckExpand, (id: string) => {
      const keys = toRaw(props.expandKeys);
      return keys.includes(id);
    });
    watch(
      () => props.value,
      (v) => {
        nextTick(() => {
          doSearch(searchValue.value);
        });
      }
    );
    /**选中的tree-item */
    let currentSelectTreeItem: ITreeData | null = null;
    /**上下方向键hover的tree item */
    let curHoverItem: ClapItem | null = null;
    function keydownCallback(e: KeyboardEvent) {
      e.preventDefault();
      e.stopPropagation();
      switch (e.key) {
        case 'ArrowUp':
          {
            const id = getTreeSelectedID();
            const ret = findBrother(false, id);
            if (ret) {
              ret.comp.doSelect(true);
            }
          }
          break;
        case 'ArrowDown':
          {
            const id = getTreeSelectedID();
            const ret = findBrother(true, id);
            if (ret) {
              ret.comp.doSelect(true);
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
          if (child.show) {
            const value: ITreeData = toRaw(child.value);
            array.push({ key: value.id!, text: value.text, comp: child });
            loop(child, array);
          }
        }
      }
    }
    // 将当前的tree拍平，这样更加方便查找前后节点
    // TODO: 优化性能，当数据发生变化后，重新计算tree2array，不用每次都计算
    function tree2array(): ClapItem[] {
      const array: Array<ClapItem> = [];
      for (let i = 0; i < childrenElements.value.length; i++) {
        const item = childrenElements.value[i];
        if (item.show) {
          const value: ITreeData = toRaw(item.value);
          array.push({ key: value.id!, text: value.text, comp: item });
          loop(item, array);
        }
      }
      // array.forEach((item) => {
      //   console.log(item.text);
      // });
      return array;
    }
    function getTreeSelectedID(): string {
      if (currentSelectTreeItem && currentSelectTreeItem.id) {
        return currentSelectTreeItem.id;
      } else {
        return '';
      }
    }
    function getHoverID(): string {
      if (curHoverItem && curHoverItem.key) {
        return curHoverItem.key;
      } else {
        return '';
      }
    }
    function findBrother(down: boolean, id: string) {
      const array = tree2array();
      if (!array.length) {
        return null;
      }
      if (!id) {
        return array[0];
      }
      const idx = array.findIndex((item) => item.key === id);
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

    const emitter = new TinyEmitter();
    provide(ProvideKeys.ShowIcon, () => {
      return props.showIcon;
    });
    provide(ProvideKeys.Emitter, emitter);
    provide(ProvideKeys.RootElement, () => {
      return toRaw(treeElement.value) as HTMLDivElement;
    });
    provide(ProvideKeys.NodeUnclick, (data: ITreeData) => {
      emit('node-unclick', data);
    });
    provide(ProvideKeys.NodeClick, (data: ITreeData) => {
      currentSelectTreeItem = data;
      emit('node-click', data);
    });
    provide(ProvideKeys.NodeEnter, (data: ITreeData) => {
      emit('node-enter', data);
    });
    provide(ProvideKeys.NodeLeave, (data: ITreeData) => {
      emit('node-leave', data);
    });
    provide(ProvideKeys.NodeExpand, (data: ITreeData) => {
      emit('node-expand', data);
    });
    provide(ProvideKeys.NodeCollapse, (data: ITreeData) => {
      emit('node-collapse', data);
    });
    provide(ProvideKeys.NodeMenu, (event: MouseEvent, data: ITreeData) => {
      emit('node-menu', event, data);
    });
    provide(ProvideKeys.CurrentSelect, () => {
      return currentSelectTreeItem;
    });
    const searchValue = ref('');
    const doSearch = throttle((v: string) => {
      if (!v) {
        emitter.emit(Msg.ResetFilter);
        return;
      }
      v = props.searchKeyProcessFunction(v);
      const data = toRaw(props.value);

      /**
       * @returns 返回匹配到的所有位置
       */
      function isMatch(text: string, query: string): number[] {
        if (!query) {
          return [];
        }
        if (text.length < query.length) {
          return [];
        }
        let index = 0;
        let pos: number[] = [];
        for (let i = 0; i < text.length; i++) {
          let a = text[i].toString();
          let b = query[index].toString();
          if (!matchCase.value) {
            a = a.toLowerCase();
            b = b.toLowerCase();
          }
          if (a === b) {
            index++;
            pos.push(i);
            if (index === query.length) {
              return pos;
            }
          }
        }
        return [];
      }
      let splitIndex = 0;
      let splitArray: string[] = v.split('/');
      function getMatchKey() {
        if (pathSplit.value) {
          return splitArray[splitIndex];
        } else {
          return v;
        }
      }
      function stepUpMatch() {
        splitIndex++;
      }
      function stepBackMatch() {
        splitIndex--;
      }

      function findMathItems(item: ITreeData[], list: Record<string, number[]>, routeList: MatchRoute[]) {
        for (let i = 0; i < item.length; i++) {
          const { text, id, children } = item[i];
          const matchRoute = new MatchRoute(id!);
          routeList.push(matchRoute);
          const matchKey = getMatchKey();
          const match = isMatch(text, matchKey);
          if (match.length) {
            matchRoute.hint = match;
            let push = false;
            if (pathSplit.value) {
              if (splitIndex === splitArray.length - 1) {
                // 分割的话，只有到达了底部才收集起来
                push = true;
              }
            } else {
              // 不分割，每一层都收集起来
              push = true;
            }
            if (push) {
              routeList.map((item) => {
                if (!list[item.id]) {
                  list[item.id] = [];
                }
                list[item.id] = list[item.id].concat(item.hint);
              });
              list[id!] = match;
            }
            stepUpMatch();
          }
          if (children && children.length) {
            findMathItems(children, list, routeList);
          }
          if (match.length) {
            stepBackMatch();
          }
          routeList.pop();
        }
      }
      const idMap: Record<string, number[]> = {};
      findMathItems(data, idMap, []);
      emitter.emit(Msg.DoFilter, idMap);
      // 检查当前选中的item是否在过滤列表中
      if (currentSelectTreeItem || curHoverItem) {
        const array = tree2array();
        if (currentSelectTreeItem && !array.find((item) => item.key === currentSelectTreeItem!.id)) {
          currentSelectTreeItem = null;
        }
        if (curHoverItem && !array.find((item) => item.key === curHoverItem!.key)) {
          curHoverItem = null;
        }
      }
      emit('do-search', toRaw(searchValue.value));
    }, 500);
    const matchCase = ref(false);
    const pathSplit = ref(false);
    const searchInput = ref(null);
    const expandAll = ref(false);
    function updateRoot() {
      childrenElements.value.forEach((item) => {
        if (item.show) {
          item.doFold(expandAll.value);
        }
      });
    }
    return {
      expandAll,
      searchInput,
      onRootExpandAll() {
        expandAll.value = !expandAll.value;
        updateRoot();
      },
      onRootCollapseAll() {
        expandAll.value = !expandAll.value;
        updateRoot();
      },
      onChangeMatchCase() {
        matchCase.value = !matchCase.value;
        doSearch(searchValue.value);
      },
      onChangePathSplit() {
        pathSplit.value = !pathSplit.value;
        doSearch(searchValue.value);
      },
      matchCase,
      pathSplit,
      searchValue,
      treeElement,
      childrenElements,
      /**
       * 手动展开某个节点，会自动连同父节点一并展开
       */
      handExpand(id: string, options: HandExpandOptions = {}) {
        // 这种方式不行，因为数据有，可能界面没有v-if，依赖界面是无法展开折叠的tree-item
        // emitter.emit(Msg.HandExpand, id);

        // 先收集要展开的tree-item路径，然后在通过事件一层一层下发去展开
        const data = toRaw(props.value);
        function loop(item: ITreeData[], arr: string[]) {
          for (let i = 0; i < item.length; i++) {
            const child = item[i];
            arr.push(child.id!);
            if (child.id === id) {
              return true;
            } else {
              if (child.children) {
                const ret = loop(child.children, arr);
                if (ret) {
                  return true;
                }
              }
            }
            arr.pop();
          }
        }
        const route: string[] = [];
        loop(data, route);
        if (route) {
          emitter.emit(Msg.HandExpand, route, options);
        }
      },
      /**
       * 手动选中已经展开的节点，如果这个节点没有展开，是不会触发选中的
       */
      handChoose(id: string) {
        emitter.emit(Msg.UpdateSelect, id);
      },
      /**
       * 手动选择根节点下的某个节点
       */
      handSelect(index: number = 0) {
        const len = childrenElements.value.length;
        if (index >= len) {
          return;
        }
        const item = childrenElements.value[index];
        if (item.doSelect) {
          item.doSelect();
        }
      },
      onKeyUp() {
        const ret = findBrother(false, getHoverID());
        if (ret) {
          curHoverItem = ret;
          ret.comp.doHover();
        }
      },
      onKeyDown() {
        const ret = findBrother(true, getHoverID());
        if (ret) {
          curHoverItem = ret;
          ret.comp.doHover();
        }
      },
      onKeyEnter() {
        if (curHoverItem) {
          curHoverItem.comp.doSelect(true);
        } else {
          // 结果中只有一个的话，就使用这个
          const array = tree2array();
          if (array.length) {
            array[0].comp.doSelect(true);
          }
        }
      },
      onInput(str: string) {
        const v = toRaw(searchValue.value);
        doSearch(v);
      },
      onInputChange(s: string) {
        const v = toRaw(searchValue.value);
        doSearch(v);
      },
      doSearchFocus() {
        if (searchInput.value) {
          // @ts-ignore
          searchInput.value.doFocus();
        }
      },
    };
  },
});
</script>
<style lang="less" scoped>
@case-bg: rgb(68, 68, 68);
@case-bg-hover: rgb(45, 45, 45);
@case-bg-active: rgb(42, 94, 136);
.root {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .search {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 3px 2px;
    margin-bottom: 1px;
    background: rgb(68, 68, 68);
    border-bottom: 1px solid rgb(100, 100, 100);
    .case {
      user-select: none;
      cursor: pointer;
      border: 1px solid @case-bg;
      background-color: @case-bg;
      border-radius: 3px;
      margin: 0 1px;
      padding: 2px;
      font-size: 13px;
      width: 15px;
      height: 15px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      color: white;
      &:first {
        margin-left: 2px;
      }
      &:end {
        margin-right: 2px;
      }
      &:hover {
        border: 1px solid @case-bg-hover;
        background-color: @case-bg-hover;
      }
    }
    .case-active {
      border: 1px solid @case-bg-active !important;
      background-color: @case-bg-active !important;
    }
  }
  .tree {
    flex: 1;
    user-select: none;
    outline: none;
    overflow: auto;
  }
}
</style>
