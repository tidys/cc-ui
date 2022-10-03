import CCMenu from './menu.vue';

export interface IUiMenuItem {
    name: string;
    enabled?: true;
    callback: Function | null;
}

export const Msg = {
    ShowMenu: 'show-menu',
};

export interface MenuOptions {
    x: number;
    y: number;
}

export { CCMenu }