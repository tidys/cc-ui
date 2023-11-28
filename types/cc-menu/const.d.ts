export interface IUiMenuItem {
    name: string;
    enabled?: true;
    callback: (item: IUiMenuItem) => void | null;
}
export declare const Msg: {
    ShowMenu: string;
};
export interface MenuOptions {
    x: number;
    y: number;
}
export declare function showMenuByMouseEvent(event: MouseEvent, newMenus: IUiMenuItem[]): void;
