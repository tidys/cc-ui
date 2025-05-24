import ccui from '../index';
// import { TinyEmitter } from 'tiny-emitter';
// export const emitter = new TinyEmitter();

export enum MenuType {
  Item = 'item',
  Separator = 'separator',
}
export interface IUiMenuItem {
  name?: string;
  /**
   * 菜单的提示语
   */
  tip?: string;
  /**
   * 菜单类型，默认是正常的菜单
   */
  type?: MenuType;
  /**
   * 菜单是否可用
   */
  enabled?: boolean;
  /**
   * 菜单是否可见，默认可见
   */
  visible?: boolean;
  /**
   * 是否选中，默认false，如果处于选中状态，icon不会显示，尽量不要和icon混用
   */
  selected?: boolean;
  /**
   * 菜单的icon
   */
  icon?: string;
  /**
   * 菜单的快捷键，注意这个仅仅是显示用，具体的快捷键逻辑需要自己实现
   */
  shortKey?: string;
  callback?: (item: IUiMenuItem, event: MouseEvent) => void | null;
  /**
   * 鼠标划入菜单
   */
  enter?: ((item: IUiMenuItem) => void) | null;
  /**
   * 鼠标离开菜单
   */
  leave?: ((item: IUiMenuItem) => void) | null;
  /**
   * 子菜单
   */
  items?: IUiMenuItem[];
}
export interface MenuListData {
  /**菜单的唯一ID，用来销毁用 */
  id: string;
  menus: IUiMenuItem[];
}
export const Msg = {
  ShowMenu: 'show-menu',
  CleanMenu: 'clean-menu',
};

export interface MenuOptions {
  x?: number;
  y?: number;
  /**
   * 菜单的透明度，取值[0-1]
   */
  opacity?: number;
  /**是否清理已经存在的菜单，这个是为子菜单设计的 */
  clean?: boolean;
  cb?: (id: string) => void;
}

export function showMenuByMouseEvent(event: MouseEvent, newMenus: IUiMenuItem[], options?: MenuOptions): void {
  options = options || {};
  options.x = event.clientX + 2;
  options.y = Math.abs(event.clientY);
  ccui.Emitter.emit(Msg.ShowMenu, options, newMenus || []);
}
export const ProvideKeys = {
  SetSubMenuListID: 'SetSubMenuListID',
};
