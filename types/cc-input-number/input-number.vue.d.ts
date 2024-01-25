declare const _default: import("vue").DefineComponent<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:value" | "change")[], "update:value" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
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
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}, {
    readonly: boolean;
    value: number;
    disabled: boolean;
    step: number;
}, {}>;
export default _default;
