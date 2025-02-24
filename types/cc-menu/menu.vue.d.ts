import { IUiMenuItem } from './const';
declare const _default: import("vue").DefineComponent<{}, {
    opacity: import("vue").Ref<number>;
    menuEl: import("vue").Ref<HTMLDivElement | undefined>;
    menus: import("vue").Ref<{
        name?: string | undefined;
        tip?: string | undefined;
        type?: import("./const").MenuType | undefined;
        enabled?: boolean | undefined;
        visible?: boolean | undefined;
        selected?: boolean | undefined;
        icon?: string | undefined;
        shortKey?: string | undefined;
        callback?: ((item: IUiMenuItem, event: MouseEvent) => void | null) | undefined;
        enter?: ((item: IUiMenuItem) => void) | null | undefined;
        leave?: ((item: IUiMenuItem) => void) | null | undefined;
    }[]>;
    menuPositionX: import("vue").Ref<number>;
    menuPositionY: import("vue").Ref<number>;
    getRoot(): HTMLElement;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
export default _default;
