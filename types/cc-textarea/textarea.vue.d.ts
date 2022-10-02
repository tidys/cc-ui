declare const _default: import("vue").DefineComponent<{
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
export default _default;
