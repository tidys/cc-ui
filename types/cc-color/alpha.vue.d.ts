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
    style: import("vue").ComputedRef<string>;
    hue: import("vue").Ref<any>;
    pointer: import("vue").Ref<any>;
    curTitle: import("vue").Ref<string>;
    onHueMouseDown(event: MouseEvent): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:color")[], "change" | "update:color", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    color?: unknown;
} & {
    color: string;
    title: string;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:color"?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    title: string;
}>;
export default _default;
