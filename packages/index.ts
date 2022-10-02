import { App } from 'vue';
import * as components from './components'
import { TinyEmitter } from 'tiny-emitter';

export { version } from '../package.json';

export const install = (app: App) => {
    Object.keys(components).forEach(key => {
        // @ts-ignore
        const comp = components[key];
        app.component(comp.displayName ?? comp.name, comp);
    })
};
export const Emitter = new TinyEmitter();