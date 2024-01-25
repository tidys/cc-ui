declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}, {
    curColor: import("vue").Ref<string>;
    curTitle: import("vue").Ref<string>;
    onKeyDown(event: KeyboardEvent): void;
    onChange(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:color")[], "change" | "update:color", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:color"?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    title: string;
}, {}>;
export default _default;
