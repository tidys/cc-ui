declare const _default: import("vue").DefineComponent<{
    value: {
        type: StringConstructor;
        default: string;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    text: import("vue").Ref<string>;
    onChange(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:value" | "change")[], "update:value" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: StringConstructor;
        default: string;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}, {
    readonly: boolean;
    value: string;
}, {}>;
export default _default;
