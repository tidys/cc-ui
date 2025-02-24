<template>
  <div class="cc-select" :class="{ focus: focus, disabled: disabled }" :style="getStyle()" ref="rootEl">
    <div class="left" v-if="arrow" @click="onLeftClick" @mouseup="onBlur" @mouseleave="onBlur" @mousedown="onFocus"></div>
    <select @change="onSelectChange" v-model="curValue" @blur="onBlur" @focus="onFocus" :disabled="disabled">
      <option v-for="(item, index) in data" :key="index" :value="item.value">
        {{ item.label }}
      </option>
    </select>
    <div class="right" v-if="arrow" @click="onRightClick" @mouseup="onBlur" @mouseleave="onBlur" @mousedown="onFocus"></div>
  </div>
</template>
<script lang="ts">
import { join } from 'lodash';
import { defineComponent, PropType, ref, toRaw, watch } from 'vue';
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
    /**
     * 使用箭头快速切换
     */
    arrow: {
      type: Boolean,
      default: false,
    },
    // TODO: placeholder，实现这个需要重构整个组件，不能使用select标签
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['change', 'update:data', 'update:value'],
  setup(props: any, { emit }) {
    const curValue = ref(props.value);
    watch(
      () => props.value,
      (val) => {
        if (val !== undefined) {
          curValue.value = val;
          emit('update:value', val);
        }
      }
    );
    const rootEl = ref();
    const focus = ref(false);
    return {
      focus,
      rootEl,
      curValue,
      getStyle() {
        const data = toRaw(props.data) as Option[];
        const cur = toRaw(curValue.value || '') as string;
        let index = data.findIndex((item) => item.value.toString() === cur.toString());
        const arr = [];
        const color_bg = '#444';
        if (data.length <= 1 || !props.arrow || index === -1) {
          arr.push(`background: ${color_bg}`);
        } else {
          const color_percent = '#555';
          const percent = ((index + 1) / data.length) * 100;
          const len = 100 / data.length;
          const gradient = [];
          gradient.push(`${color_percent} 0%`);
          gradient.push(`${color_percent} ${Math.max(percent, 0)}%`);
          gradient.push(`${color_bg} ${Math.min(percent, 100)}%`);
          gradient.push(`${color_bg} 100%`);
          arr.push(`background: linear-gradient(to right, ${gradient.join(',')})`);
        }
        return arr.join(';');
      },
      onLeftClick() {
        const data = toRaw(props.data) as Option[];
        const cur = toRaw(curValue.value || '') as string;
        let index = data.findIndex((item) => item.value.toString() === cur.toString());
        if (index !== -1) {
          index--;
          if (index < 0) {
            index = data.length - 1;
          }
          const val = data[index].value;
          curValue.value = val;
          emit('update:value', val);
          emit('change', val);
        }
      },
      onRightClick() {
        const data = toRaw(props.data) as Option[];
        const cur = toRaw(curValue.value || '') as string;
        let index = data.findIndex((item) => item.value.toString() === cur.toString());
        if (index !== -1) {
          index++;
          if (index >= data.length) {
            index = 0;
          }
          const val = data[index].value;
          curValue.value = val;
          emit('update:value', val);
          emit('change', val);
        }
      },
      onFocus() {
        if (rootEl.value) {
          focus.value = true;
        }
      },
      onBlur() {
        if (rootEl.value) {
          focus.value = false;
        }
      },
      onSelectChange() {
        const val = curValue.value;
        emit('update:value', val);
        emit('change', val);
      },
    };
  },
});
</script>

<style scoped lang="less">
@size: 6px;
@arrow-color: rgb(179, 179, 179);
@arrow-active-color: #fd942b;
@arrow-hover-color: rgb(136, 136, 136);
@disabled-border-color: rgb(200, 129, 48);
@disabled-color: rgb(240, 95, 28);
.focus {
  border-color: @arrow-active-color !important;
}
.disabled {
  border-color: @disabled-border-color !important;
  background-color: @disabled-color !important;
}
.cc-select {
  flex: 1;
  padding: 0 1px;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  border-radius: 2px;
  border: 1px solid #171717;

  &:hover {
    border-color: #888;
  }
  &:focus {
    border-color: @arrow-active-color !important;
  }

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
  .left {
    width: 0;
    height: 0;
    margin-right: 1px;
    border-top: @size solid transparent;
    border-bottom: @size solid transparent;
    border-right: @size*2 solid @arrow-color;
    &:hover {
      border-right: @size*2 solid @arrow-hover-color;
    }
    &:active {
      border-right: @size*2 solid @arrow-active-color;
    }
  }
  .right {
    width: 0;
    height: 0;
    margin-left: 1px;
    border-top: @size solid transparent;
    border-bottom: @size solid transparent;
    border-left: @size*2 solid @arrow-color;
    &:hover {
      border-left: @size*2 solid @arrow-hover-color;
    }
    &:active {
      border-left: @size*2 solid @arrow-active-color;
    }
  }

  select {
    user-select: none;
    height: 100%;
    display: flex;
    flex: 1;
    outline: 0;
    text-overflow: ellipsis;
    color: #f3f3f3;
    background: transparent;
    width: 100%;
    border: 0 solid transparent;
    padding: 0 0 0 0;

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
