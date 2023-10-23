<template>
  <div class="url-tip">
    <div class="content">
      <div style="display: inline ;">
        <div style="display: inline;">{{ head1 }}</div>
        <a style="display: inline;" :href="href" target="_blank" ref="aElement">{{ aLink }} </a>
        <div style="display: inline;">{{ head2 }}</div>
      </div>
    </div>
    <div class="end">{{ timerString }}</div>
  </div>
</template>
<script lang="ts">
import { PropType, defineComponent, onUnmounted, ref } from 'vue';
import { DialogUrlData } from './const';

export default defineComponent({
  name: 'url-tip',
  props: {
    data: {
      type: Object as PropType<DialogUrlData>,
      required: true,
      default: () => new DialogUrlData()
    }
  },
  setup(props, ctx) {
    const { url, label, jump } = props.data;
    const timerString = ref<string>('');
    const head1 = ref<string>('');
    const head2 = ref<string>('');
    const aLink = ref<string>('');
    const href = ref<string>(url);
    const aElement = ref<HTMLAnchorElement>();
    const result = label.match(/(.*)\{(.*)\}(.*)/);
    if (result && result.length >= 4) {
      head1.value = result[1];
      aLink.value = result[2];
      head2.value = result[3];
    }
    let timer: number | null = null;
    const cleanTimer = () => {
      if (timer != null) {
        clearTimeout(timer);
        timer = null;
      }
    };
    if (jump > 0) {
      const updateTips = (num: number) => {
        if (num > 0) {
          timerString.value = `${num}s自动跳转`;
        } else {
          timerString.value = '';
        }
      };

      let totalTimer = jump;
      if (jump >= 1) {
        timer = setInterval(() => {
          totalTimer--;
          updateTips(totalTimer);
          if (totalTimer < 0) {
            aElement.value?.click();
            cleanTimer();
          }
        }, 1000);
        updateTips(totalTimer);
      }
    }
    onUnmounted(() => {
      cleanTimer();
    });
    return { head1, head2, aLink, href, aElement, timerString };
  }
});
</script>
<style lang="less">
.url-tip {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .content {
    align-items: center;
    align-content: flex-start;
    justify-content: center;
    flex: 1;
    width: 100%;
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
    word-break: break-all;
  }
  .end {
    margin-right: 10px;
    font-size: 15px;
    color: #888;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-content: flex-end;
    justify-content: flex-end;
    align-items: flex-end;
  }
}
</style>
