import { IUiMenuItem } from './const';
declare const _default: import("vue").DefineComponent<{}, {
    menuEl: import("vue").Ref<HTMLDivElement | undefined>;
    menus: import("vue").Ref<{
        name: string;
        enabled?: boolean | undefined;
        callback: (item: IUiMenuItem) => void | null;
    }[]>;
    menuPositionX: import("vue").Ref<number>;
    menuPositionY: import("vue").Ref<number>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
export default _default;
