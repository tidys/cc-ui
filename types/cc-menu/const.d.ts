export declare enum MenuType {
    Item = "item",
    Separator = "separator"
}
export interface IUiMenuItem {
    name?: string;
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
    callback?: (item: IUiMenuItem) => void | null;
    /**
     * 鼠标划入菜单
     */
    enter?: ((item: IUiMenuItem) => void) | null;
    /**
     * 鼠标离开菜单
     */
    leave?: ((item: IUiMenuItem) => void) | null;
}
export declare const Msg: {
    ShowMenu: string;
    HideMenu: string;
};
export interface MenuOptions {
    x: number;
    y: number;
    /**
     * 菜单的透明度，取值[0-1]
     */
    opacity: number;
}
export declare function showMenuByMouseEvent(event: MouseEvent, newMenus: IUiMenuItem[], opacity?: number): void;
