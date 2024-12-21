import { TinyEmitter } from 'tiny-emitter';
import { App } from 'vue';
import { buttonGroup } from './cc-button-group/index';
import { command } from './cc-command/index';
import { dialog } from './cc-dialog/index';
import { divider } from './cc-divider/index';
import { footbar } from './cc-footbar/index';
import { menu } from './cc-menu/index';
import { select } from './cc-select/index';
import { prop } from './cc-prop/index';
import { color } from './cc-color/index';
import { table } from './cc-table/index';
import { tree } from './cc-tree/index';
import './common/scrollbar.less';
import { components } from './components';
export const install = (app: App) => {
  Object.keys(components).forEach((key) => {
    // @ts-ignore
    const comp = components[key];
    app.component(comp.displayName ?? comp.name, comp);
  });
};
const Emitter = new TinyEmitter();
// 对外提供的全局方法
const Methods = { divider, buttonGroup, color, prop, menu, tree, dialog, footbar, command, table, select };
export default { install, Emitter, components, ...Methods };
