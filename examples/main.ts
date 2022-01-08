import {createApp} from 'vue';
import App from './App.vue';
import CCUI from '../packages';

const app = createApp(App);
app.use(CCUI);
app.mount('#app');

