import { App } from 'vue';
import * as components from './components';
import { TinyEmitter } from 'tiny-emitter';
import { showMenuByMouseEvent } from './cc-menu/method';
import { showDialog } from './cc-dialog/index';
export const install = (app: App) => {
  Object.keys(components).forEach(key => {
    // @ts-ignore
    const comp = components[key];
    app.component(comp.displayName ?? comp.name, comp);
  });
};
export const Emitter = new TinyEmitter();
// 对外提供的全局方法
export const Methods = {
  CCMenu: { showMenuByMouseEvent },
  CCDialog: { showDialog }
};
export default { install, Methods, Emitter, ...components };
