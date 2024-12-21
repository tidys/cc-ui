import { createApp } from 'vue';
import App from './app.vue';
import CCUI from '../packages';
import '../iconfont/iconfont.css';
CCUI.prop.config.headWidth = 100;
CCUI.color.config.showColorText = true;
const app = createApp(App);
const useShadowRoot = false;
if (useShadowRoot) {
  // 还没想好怎么适配到shadow-root上
  const shadowHost = document.querySelector('#app');
  const shadowRoot = shadowHost!.attachShadow({ mode: 'open' });
  const div = document.createElement('div');
  shadowRoot.appendChild(div);

  const style = document.createElement('style');
  app.mount(div);
} else {
  app.mount('#app');
}
