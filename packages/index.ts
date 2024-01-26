import { App } from 'vue';
import './common/scrollbar.less';
import { components } from './components';
import { TinyEmitter } from 'tiny-emitter';
import { menu } from './cc-menu/index';
import { dialog } from './cc-dialog/index';
import { footbar } from './cc-footbar/index';
import { command } from './cc-command/index';
import { table } from './cc-table/index';
import { select } from './cc-select/index';
import { buttonGroup } from './cc-button-group/index';
import { divider } from './cc-divider/index';
export const install = (app: App) => {
  Object.keys(components).forEach((key) => {
    // @ts-ignore
    const comp = components[key];
    app.component(comp.displayName ?? comp.name, comp);
  });
};
const Emitter = new TinyEmitter();
// 对外提供的全局方法
const Methods = { divider, buttonGroup, menu, dialog, footbar, command, table, select };
export default { install, Emitter, components, ...Methods };
