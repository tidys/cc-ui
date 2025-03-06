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
    placeholder: {
        type: StringConstructor;
        default: string;
    };
}, {
    elInput: import("vue").Ref<HTMLInputElement | undefined>;
    hover: import("vue").Ref<boolean>;
    text: import("vue").Ref<string>;
    borderColor: import("vue").Ref<string>;
    getCSS(): string;
    onKeyDown(event: KeyboardEvent): void;
    onInput(event: InputEvent): void;
    onFocusin(event: FocusEvent): void;
    onClean(): void;
    onFocusout(): void;
    onBlur(): void;
    doFocus(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:value" | "change" | "input" | "key-up" | "key-down" | "key-enter")[], "input" | "update:value" | "change" | "key-up" | "key-down" | "key-enter", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    placeholder: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    "onKey-up"?: ((...args: any[]) => any) | undefined;
    "onKey-down"?: ((...args: any[]) => any) | undefined;
    "onKey-enter"?: ((...args: any[]) => any) | undefined;
}, {
    readonly: boolean;
    disabled: boolean;
    value: string;
    maxlength: number;
    directory: boolean;
    placeholder: string;
}, {}>;
export default _default;
