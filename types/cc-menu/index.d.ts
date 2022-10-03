import CCMenu from './menu.vue';
export interface IUiMenuItem {
    name: string;
    enabled?: true;
    callback: Function | null;
}
export declare const Msg: {
    ShowMenu: string;
};
export interface MenuOptions {
    x: number;
    y: number;
}
export { CCMenu };
