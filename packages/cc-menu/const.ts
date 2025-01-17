import ccui from '../index';

export interface IUiMenuItem {
  name: string;
  enabled?: boolean;
  /**
   * 菜单的icon
   */
  icon?: string;
  /**
   * 菜单的快捷键，注意这个仅仅是显示用，具体的快捷键逻辑需要自己实现
   */
  shortKey?: string;
  callback: (item: IUiMenuItem) => void | null;
}

export const Msg = {
  ShowMenu: 'show-menu',
};

export interface MenuOptions {
  x: number;
  y: number;
}

export function showMenuByMouseEvent(event: MouseEvent, newMenus: IUiMenuItem[]): void {
  const options: MenuOptions = {
    x: event.clientX + 2,
    y: Math.abs(event.clientY),
  };
  ccui.Emitter.emit(Msg.ShowMenu, options, newMenus || []);
}
