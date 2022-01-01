import CCButton from './index.vue';

(CCButton as any).install = (Vue: any) => {
    Vue.component(CCButton.name, CCButton);
};
export default CCButton;
