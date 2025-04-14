<template>
  <div class="cc-textarea">
    <label>
      <textarea class="ccui-scrollbar" ref="el" v-model="text" :readonly="readonly" placeholder="" @change="onChange"></textarea>
    </label>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'CCTextarea',
  emits: ['change', 'update:value'],
  props: {
    value: { type: String, default: '' },
    readonly: { type: Boolean, default: false },
    /**自动滚动到底部 */
    autoScroll: { type: Boolean, default: false },
  },
  setup(props, { emit }) {
    const text = ref(props.value);
    watch(
      () => props.value,
      () => {
        text.value = props.value;
        if (props.autoScroll) {
          const textarea = el.value as HTMLTextAreaElement;
          if (textarea) {
            textarea.scrollTop = textarea.scrollHeight;
          }
        }
      }
    );
    const el = ref<HTMLTextAreaElement>();
    return {
      text,
      el,
      onChange() {
        emit('update:value', text.value);
        emit('change', text.value);
      },
    };
  },
});
</script>
<style scoped lang="less">
.cc-textarea {
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  background: #262626;
  border-radius: 3px;
  color: #333333;
  font-size: 1.5em;
  font-weight: 700;

  textarea {
    display: block;
    resize: vertical;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    outline: none;
    margin: 0;
    word-break: break-all;
    padding: 0.084em 0.5em;
    min-height: 4.084em;

    border-radius: 3px;
    border: 1px solid #171717;
    background: 0 0;
    color: #fd942b;

    &:focus {
      border-color: #fd942b;
    }
  }
}
</style>
