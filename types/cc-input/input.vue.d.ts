declare const _default: import("vue").DefineComponent<{
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
    /**
     * input的值是否为目录
     */
    directory: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    text: import("vue").Ref<string>;
    borderColor: import("vue").Ref<string>;
    getCSS(): string;
    onFocusin(): void;
    onFocusout(): void;
    onBlur(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:value" | "change")[], "update:value" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    readonly?: unknown;
    maxlength?: unknown;
    disabled?: unknown;
    directory?: unknown;
} & {
    readonly: boolean;
    value: string;
    maxlength: number;
    disabled: boolean;
    directory: boolean;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}, {
    readonly: boolean;
    value: string;
    maxlength: number;
    disabled: boolean;
    directory: boolean;
}>;
export default _default;
