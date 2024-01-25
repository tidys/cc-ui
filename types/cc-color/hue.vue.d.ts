declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    hue: {
        type: NumberConstructor;
        default: number;
    };
}, {
    hueEl: import("vue").Ref<any>;
    pointer: import("vue").Ref<any>;
    onHueMouseDown(event: MouseEvent): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:hue")[], "change" | "update:hue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    hue: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:hue"?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    hue: number;
}, {}>;
export default _default;
