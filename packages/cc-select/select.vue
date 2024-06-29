<template>
  <div class="cc-select">
    <select @change="onSelectChange" v-model="curValue">
      <option v-for="(item, index) in data" :key="index" :value="item.value">
        {{ item.label }}
      </option>
    </select>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType, watch } from 'vue';
import { Option } from './const';

export default defineComponent({
  name: 'CCSelect',
  props: {
    data: {
      type: Array as PropType<Option[]>,
      required: true,
      default() {
        return [];
      },
    },
    value: [String, Number],
    // TODO: placeholder，实现这个需要重构整个组件，不能使用select标签
    placeholder: {
      type: String,
      default: '',
    },
  },
  emits: ['change', 'update:data', 'update:value'],
  setup(props: any, { emit }) {
    const curValue = ref(props.value?.toString() || '');
    watch(
      () => props.value,
      (val) => {
        curValue.value = val.toString();
      }
    );
    return {
      curValue,
      onSelectChange() {
        const val = curValue.value.toString();
        emit('update:value', val);
        emit('change', val);
      },
    };
  },
});
</script>

<style scoped lang="less">
.cc-select {
  flex: 1;
  padding: 0 1px;
  // position: relative;
  // &::after {
  //   position: absolute;
  //   right: 0;
  //   top: 0;
  //   content: 'x';
  //   color: #bdbdbd;
  //   font-size: 12px;
  //   margin-left: 5px;
  // }
  select {
    height: 100%;
    display: flex;
    flex: 1;
    outline: 0;
    border: 1px solid #171717;
    text-overflow: ellipsis;
    color: #f3f3f3;
    background: #444;
    width: 100%;
    border-radius: 2px;
    padding: 0 0 0 0;

    &:hover {
      border-color: #888;
    }
    &:focus {
      border-color: #fd942b;
    }
    option {
      color: #f3f3f3;
      background: #444;
    }
  }
  select::-webkit-scrollbar {
    width: 5px;
    height: 1px;
  }
  select::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #d3d3d3;
  }

  select::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #5e5e5e;
  }

  label {
    &:after {
      display: block;
      content: ' ';
      float: right;
      width: 0;
      height: 0;
      pointer-events: none;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 7px solid #bdbdbd;
      margin-top: -12px;
      margin-right: 7px;
    }
  }
}
</style>
