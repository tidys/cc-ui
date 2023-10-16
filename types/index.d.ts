import { App } from 'vue';
import * as components from './components';
import { TinyEmitter } from 'tiny-emitter';
import { showMenuByMouseEvent } from './cc-menu/method';
export declare const install: (app: App) => void;
export declare const Emitter: TinyEmitter;
export declare const Methods: {
    CCMenu: {
        showMenuByMouseEvent: typeof showMenuByMouseEvent;
    };
    CCDialog: {
        showDialog: typeof components.showDialog;
    };
};
declare const _default: {
    CCButton: import("vue").DefineComponent<{
        transition: {
            type: StringConstructor;
            default: string;
            validator: (value: unknown) => boolean;
        };
        color: {
            type: StringConstructor;
        };
        texture: {
            type: StringConstructor;
        };
    }, {
        theme: {
            background: string;
        };
        isClick: import("vue").Ref<boolean>;
        onMouseup(): void;
        onMousedown(): void;
        onMouseenter(): void;
        onMouseleave(): void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, never[], never, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        transition?: unknown;
        color?: unknown;
        texture?: unknown;
    } & {
        transition: string;
    } & {
        color?: string | undefined;
        texture?: string | undefined;
    }> & {}, {
        transition: string;
    }>;
    CCCheckBox: import("vue").DefineComponent<{
        value: {
            type: BooleanConstructor;
            default: boolean;
        };
        label: {
            type: StringConstructor;
            default: string;
        };
    }, {
        val: import("vue").Ref<boolean>;
        label: import("vue").Ref<string>;
        onChange(): void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:value" | "change")[], "update:value" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        value?: unknown;
        label?: unknown;
    } & {
        label: string;
        value: boolean;
    } & {}> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    }, {
        label: string;
        value: boolean;
    }>;
    CCColor: import("vue").DefineComponent<{
        color: {
            type: StringConstructor;
            default: string;
        };
        alpha: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {
        color: import("vue").Ref<HTMLElement | undefined>;
        panel: import("vue").Ref<HTMLElement | undefined>;
        saturationComp: import("vue").Ref<any>;
        colorList: import("vue").Ref<string[]>;
        hexColor: import("vue").Ref<string>;
        hueValue: import("vue").Ref<number>;
        style: import("vue").ComputedRef<{
            backgroundColor: string;
        }>;
        show: import("vue").Ref<boolean>;
        onShowPanel(): void;
        onColorChangeSaturation(color: string): void;
        onChangeColorHue(color: string): void;
        onColorChangeHex(color: string): void;
        onColorListSelect(color: string): void;
        onFocusin(event: FocusEvent): void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:color")[], "change" | "update:color", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        color?: unknown;
        alpha?: unknown;
    } & {
        color: string;
        alpha: boolean;
    } & {}> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:color"?: ((...args: any[]) => any) | undefined;
    }, {
        color: string;
        alpha: boolean;
    }>;
    CCSection: import("vue").DefineComponent<{
        name: {
            type: StringConstructor;
        };
        expand: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {
        fold: import("vue").Ref<boolean>;
        name: import("vue").Ref<string>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        name?: unknown;
        expand?: unknown;
    } & {
        expand: boolean;
    } & {
        name?: string | undefined;
    }>, {
        expand: boolean;
    }>;
    CCInput: import("vue").DefineComponent<{
        value: {
            type: StringConstructor;
            default: string;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        maxlength: {
            type: NumberConstructor;
            default: number;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {
        text: import("vue").Ref<string>;
        borderColor: import("vue").Ref<string>;
        onFocusin(): void;
        onFocusout(): void;
        onBlur(): void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:value" | "change")[], "update:value" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        value?: unknown;
        readonly?: unknown;
        maxlength?: unknown;
        disabled?: unknown;
    } & {
        readonly: boolean;
        value: string;
        maxlength: number;
        disabled: boolean;
    } & {}> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    }, {
        readonly: boolean;
        value: string;
        maxlength: number;
        disabled: boolean;
    }>;
    CCInputNumber: import("vue").DefineComponent<{
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        value: {
            type: NumberConstructor;
            required: true;
            default: number;
        };
        min: {
            type: NumberConstructor;
        };
        max: {
            type: NumberConstructor;
        };
        step: {
            type: NumberConstructor;
            default: number;
        };
    }, {
        val: import("vue").Ref<number>;
        input: import("vue").Ref<any>;
        onChange(): void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:value" | "change")[], "update:value" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        disabled?: unknown;
        value?: unknown;
        min?: unknown;
        max?: unknown;
        step?: unknown;
    } & {
        value: number;
        disabled: boolean;
        step: number;
    } & {
        min?: number | undefined;
        max?: number | undefined;
    }> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    }, {
        value: number;
        disabled: boolean;
        step: number;
    }>;
    CCProp: import("vue").DefineComponent<{
        name: {
            type: StringConstructor;
        };
        tooltip: {
            type: StringConstructor;
            default: string;
        };
        align: {
            type: StringConstructor;
            default: string;
        };
    }, {
        tips: import("vue").Ref<HTMLElement | undefined>;
        isShowTips: import("vue").Ref<boolean>;
        arrow: import("vue").Ref<HTMLElement | undefined>;
        text: import("vue").Ref<HTMLElement | undefined>;
        name: import("vue").Ref<string>;
        isHove: import("vue").Ref<boolean>;
        onHover(event: any): void;
        onOver(): void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        name?: unknown;
        tooltip?: unknown;
        align?: unknown;
    } & {
        tooltip: string;
        align: string;
    } & {
        name?: string | undefined;
    }>, {
        tooltip: string;
        align: string;
    }>;
    Msg: {
        ShowMenu: string;
    };
    CCMenu: import("vue").DefineComponent<{}, {
        menus: import("vue").Ref<{
            name: string;
            enabled?: true | undefined;
            callback: Function | null;
        }[]>;
        menuPositionX: import("vue").Ref<number>;
        menuPositionY: import("vue").Ref<number>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
    CCSelect: import("vue").DefineComponent<{
        data: {
            type: import("vue").PropType<import("./cc-select/data").Option[]>;
            required: true;
            default(): never[];
        };
        value: (StringConstructor | NumberConstructor)[];
    }, {
        curValue: any;
        onSelectChange(): void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:value" | "change" | "update:data")[], "update:value" | "change" | "update:data", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        data?: unknown;
        value?: unknown;
    } & {
        data: import("./cc-select/data").Option[];
    } & {
        value?: string | number | undefined;
    }> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        "onUpdate:data"?: ((...args: any[]) => any) | undefined;
    }, {
        data: import("./cc-select/data").Option[];
    }>;
    CCSlider: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
    CCTextarea: import("vue").DefineComponent<{
        data: {
            type: StringConstructor;
            default: string;
        };
    }, {
        text: import("vue").Ref<string>;
        onChange(): void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:data")[], "change" | "update:data", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        data?: unknown;
    } & {
        data: string;
    } & {}> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:data"?: ((...args: any[]) => any) | undefined;
    }, {
        data: string;
    }>;
    UiWindowOptions: typeof components.UiWindowOptions;
    ProvideKey: {
        CloseWindow: string;
        ResponseCB: string;
    };
    CCWindow: import("vue").DefineComponent<{
        data: {
            type: import("vue").PropType<components.UiWindowOptions>;
        };
    }, {
        windowEl: import("vue").Ref<any>;
        onWinClose: () => void;
        onMousedown: (event: MouseEvent) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        data?: unknown;
    } & {} & {
        data?: components.UiWindowOptions | undefined;
    }> & {
        onClose?: ((...args: any[]) => any) | undefined;
    }, {}>;
    CCDialog: import("vue").DefineComponent<{}, {
        dialogWindows: import("vue").Ref<{
            comp?: any;
            data?: any;
            clickOutsideClose?: boolean | undefined;
            id?: string | undefined;
            width?: number | undefined;
            height?: number | undefined;
            resize?: boolean | undefined;
            title?: string | undefined;
            closeCB?: Function | null | undefined;
            responseCB?: Function | null | undefined;
        }[]>;
        getWindowOption(opt: components.DialogOptions): components.UiWindowOptions;
        getWindowRenderComponent(opt: components.DialogOptions): any;
        getWindowRenderComponentData(opt: components.DialogOptions): any;
        show: import("vue").Ref<boolean>;
        onWinClose: (opt: components.DialogOptions) => void;
        onMaskClick: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
    DialogMsg: {
        ShowDialog: string;
    };
    DialogOptions: typeof components.DialogOptions;
    DialogUrlData: typeof components.DialogUrlData;
    showDialog: typeof components.showDialog;
    install: (app: App<any>) => void;
    Methods: {
        CCMenu: {
            showMenuByMouseEvent: typeof showMenuByMouseEvent;
        };
        CCDialog: {
            showDialog: typeof components.showDialog;
        };
    };
    Emitter: TinyEmitter;
};
export default _default;
