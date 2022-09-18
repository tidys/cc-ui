import { createApp } from 'vue';
import App from './app.vue';
import CCUI from '../packages';
import '../iconfont/iconfont.css'
const app = createApp(App);
app.use(CCUI);
app.mount('#app');
