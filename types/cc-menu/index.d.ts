import CCMenu from './menu.vue';
export declare class IUiMenuItem {
    name: string;
    enabled?: boolean | undefined;
    callback: Function | null;
    constructor(name: string, callback?: Function | null, enabled?: boolean);
}
export declare const Msg: {
    ShowMenu: string;
};
export interface MenuOptions {
    x: number;
    y: number;
}
export declare function showMenuByMouseEvent(event: MouseEvent, newMenus: IUiMenuItem[]): void;
export { CCMenu };
