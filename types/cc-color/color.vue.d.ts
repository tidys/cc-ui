declare const _default: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    alpha: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否显示颜色值
     */
    showColorText: {
        type: BooleanConstructor;
        default: () => boolean;
    };
}, {
    color: import("vue").Ref<HTMLElement | undefined>;
    panel: import("vue").Ref<HTMLElement | undefined>;
    saturationComp: import("vue").Ref<any>;
    colorList: import("vue").Ref<string[]>;
    hexColor: import("vue").Ref<string>;
    hueValue: import("vue").Ref<number>;
    style: import("vue").ComputedRef<{
        backgroundColor: string;
    }>;
    show: import("vue").Ref<boolean>;
    textColor(): "#000000" | "#ffffff";
    onShowPanel(): void;
    onColorChangeSaturation(color: string): void;
    onChangeColorHue(color: string): void;
    onColorChangeHex(color: string): void;
    onColorListSelect(color: string): void;
    onFocusin(event: FocusEvent): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:color")[], "change" | "update:color", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    alpha: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否显示颜色值
     */
    showColorText: {
        type: BooleanConstructor;
        default: () => boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:color"?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    disabled: boolean;
    alpha: boolean;
    showColorText: boolean;
}, {}>;
export default _default;
