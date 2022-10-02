declare const _default: import("vue").DefineComponent<{
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
} & {
    min?: number | undefined;
    max?: number | undefined;
    step?: number | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}, {
    value: number;
    disabled: boolean;
}>;
export default _default;
