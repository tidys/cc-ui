<template>
  <div class="url-tip">
    <div>{{ head1 }}</div>
    <a :href="href" target="_blank">{{ aLink }} </a>
    <div>{{ head2 }}</div>
  </div>
</template> 
<script lang="ts">
import { PropType, defineComponent, ref } from 'vue';
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
    const { url, label } = props.data;
    const head1 = ref<string>('');
    const head2 = ref<string>('');
    const aLink = ref<string>('');
    const href = ref<string>(url);

    const result = label.match(/(.*)\{(.*)\}(.*)/);
    if (result && result.length >= 4) {
      head1.value = result[1];
      aLink.value = result[2];
      head2.value = result[3];
    }
    return { head1, head2, aLink, href };
  }
});
</script>
<style lang="less">
.url-tip {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  align-content: flex-start;
  justify-content: center;
  overflow: hidden;
  flex-wrap: wrap;
}
</style>
