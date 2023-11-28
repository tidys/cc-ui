import { IUiMenuItem } from './const';
declare const _default: import("vue").DefineComponent<{}, {
    menuEl: import("vue").Ref<HTMLDivElement | undefined>;
    menus: import("vue").Ref<{
        name: string;
        enabled?: true | undefined;
        callback: (item: IUiMenuItem) => void | null;
    }[]>;
    menuPositionX: import("vue").Ref<number>;
    menuPositionY: import("vue").Ref<number>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
export default _default;
