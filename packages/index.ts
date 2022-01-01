import CCButton from './cc-button/index';

const components = [CCButton];
const install = (Vue: any) => {
    components.forEach((component) => {
        Vue.component(component.name, component);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    install,
    CCButton,
};
