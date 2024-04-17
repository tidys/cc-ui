declare const _default: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    tooltip: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    isDisabled: any;
    arrow: import("vue").Ref<HTMLElement | undefined>;
    text: import("vue").Ref<HTMLElement | undefined>;
    tips: import("vue").Ref<HTMLDivElement | undefined>;
    isShowTips: import("vue").Ref<boolean>;
    theme: import("vue").Ref<{
        background: string;
    }>;
    isClick: import("vue").Ref<boolean>;
    onHover(event: any): void;
    onMouseup(): void;
    onMousedown(): void;
    onClick(): void;
    onMouseenter(): void;
    onMouseleave(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "confirm"[], "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    tooltip: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onConfirm?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    tooltip: string;
    disabled: boolean;
}, {}>;
export default _default;
