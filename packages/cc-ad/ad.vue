<template>
  <div class="ad">
    <div>{{ text }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
interface AdData {
  /**
   * 广告截止时间
   */
  time: string;
  /**
   * 广告标题
   */
  text: string;
  /**
   * 广告链接
   */
  url: string;
}
// https://cdn.jsdelivr.net/gh/cocos-creator-plugin/cc-editor@1.0.20/package.json
// 有跨域的问题，可能得考虑使用npm
const defaultUrl = 'https://gitlab.com/xuyanfeng/plugin-ad/-/raw/main/ad.json';

/**
 * 广告组件，一般我们放在面板的顶部
 *
 * 建议只在web端显示，收费的插件端不显示。
 */
export default defineComponent({
  name: 'Ad',
  props: {
    url: {
      type: String,
      default: defaultUrl,
    },
  },
  setup() {
    function getAd() {
      axios({
        method: 'get',
        url: defaultUrl,
        responseType: 'json',
      })
        .then((res) => {
          debugger;
        })
        .catch((err) => {});
    }
    getAd();
    const text = ref('');
    return { text };
  },
});
</script>

<style lang="less" scoped>
.ad {
  max-height: 20px;
  min-height: 20px;
  background-color: rgb(102, 102, 102);
}
</style>
