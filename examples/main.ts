import Vue from 'vue';
import App from './App.vue';
import CCUI from '../packages';

Vue.use(CCUI);

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount('#app');
