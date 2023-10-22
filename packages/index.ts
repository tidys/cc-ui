import { App } from 'vue';
import { components } from './components';
import { TinyEmitter } from 'tiny-emitter';
import { menu } from './cc-menu/index';
import { dialog } from './cc-dialog/index';
import {footbar} from './cc-footbar/index'
export const install = (app: App) => {
  Object.keys(components).forEach(key => {
    // @ts-ignore
    const comp = components[key];
    app.component(comp.displayName ?? comp.name, comp);
  });
};
const Emitter = new TinyEmitter();
// 对外提供的全局方法
const Methods = { menu, dialog,footbar };
export default { install, Emitter, components, ...Methods };
