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
export default _default;
