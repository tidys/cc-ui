import { App } from 'vue';
import * as components from './components'
import { TinyEmitter } from 'tiny-emitter';

const install = (app: App) => {
    Object.keys(components).forEach(key => {
        // @ts-ignore
        const comp = components[key];
        app.component(comp.displayName ?? comp.name, comp);
    })
};
export const Emitter = new TinyEmitter();
export default { install, version: "0.1.0" }
