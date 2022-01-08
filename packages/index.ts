import CCButton from './cc-button/index';
import {App, Plugin} from 'vue';

const components = [CCButton];
const install = (app: any) => {
    components.forEach((component: any) => {
        app.use(component);
    });
};

export default {
    install,
    CCButton,
};
export {CCButton};
