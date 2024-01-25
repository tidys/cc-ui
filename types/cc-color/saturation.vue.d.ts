declare const _default: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
}, {
    bgColor: import("vue").Ref<string>;
    pointer: import("vue").Ref<any>;
    picker: import("vue").Ref<any>;
    updateBaseColor: (color: string) => void;
    onPickerPointerMouseDown(event: MouseEvent): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:color")[], "change" | "update:color", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:color"?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
}, {}>;
export default _default;
