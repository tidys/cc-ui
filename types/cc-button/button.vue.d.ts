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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, never[], never, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    transition?: unknown;
    color?: unknown;
    texture?: unknown;
    tooltip?: unknown;
} & {
    transition: string;
    tooltip: string;
} & {
    color?: string | undefined;
    texture?: string | undefined;
}> & {}, {
    transition: string;
    tooltip: string;
}>;
export default _default;
