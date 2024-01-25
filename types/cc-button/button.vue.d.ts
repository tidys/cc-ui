declare const _default: import("vue").DefineComponent<{
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
    tooltip: {
        type: StringConstructor;
        default: string;
    };
}, {
    arrow: import("vue").Ref<HTMLElement | undefined>;
    text: import("vue").Ref<HTMLElement | undefined>;
    tips: import("vue").Ref<HTMLDivElement | undefined>;
    isShowTips: import("vue").Ref<boolean>;
    theme: {
        background: string;
    };
    isClick: import("vue").Ref<boolean>;
    onHover(event: any): void;
    onMouseup(): void;
    onMousedown(): void;
    onMouseenter(): void;
    onMouseleave(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, never[], never, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    tooltip: {
        type: StringConstructor;
        default: string;
    };
}>> & {}, {
    transition: string;
    tooltip: string;
}, {}>;
export default _default;
