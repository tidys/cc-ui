<template>
  <div class="cc-button-group">
    <CCButtonGroupItem v-for="(item, index) in items" :key="index" :data="item" :recover="recover"> </CCButtonGroupItem>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide, PropType, ref, toRaw, watch, onMounted } from 'vue';
import { ButtonGroupItem, ProvideKey, Msg } from './const';
import CCButtonGroupItem from './item.vue';
import { TinyEmitter } from 'tiny-emitter';
export default defineComponent({
  name: 'CCButtonGroup',
  components: { CCButtonGroupItem },
  props: {
    items: {
      type: Array as PropType<ButtonGroupItem[]>,
      default: () => [],
    },
    color: {
      type: String,
      default: '#444',
    },
    /**
     * 按下后是否自动回复原来的样式
     */
    recover: {
      type: Boolean,
      default: false,
    },
    /**
     * 选择的item，当recover为false的时候，外观才会发生变化
     */
    chooseItem: {
      type: Object as PropType<ButtonGroupItem>,
      default: () => {
        return {};
      },
    },
  },
  setup(props, ctx) {
    const emitter = new TinyEmitter();
    watch(
      () => props.chooseItem,
      (val: ButtonGroupItem) => {
        emitter.emit(Msg.Choose, val);
      }
    );
    onMounted(() => {
      emitter.emit(Msg.Choose, props.chooseItem);
    });

    provide(ProvideKey.Emitter, emitter);
    let zIndex = 0;
    /**
     * 暂时废弃了这种方式，可能会越界
     */
    provide(ProvideKey.ZIndex, () => {
      zIndex++;
      return zIndex;
    });
    watch(props.items, (newVal) => {});
    return {};
  },
});
</script>
<style scoped lang="less">
.cc-button-group {
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  margin: 5px;
  flex-wrap: nowrap;
  padding: 3px 5px;
}
</style>
