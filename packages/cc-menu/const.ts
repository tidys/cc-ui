import ccui from '../index';

export interface IUiMenuItem {
  name: string;
  enabled?: true;
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
