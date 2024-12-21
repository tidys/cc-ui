declare const _default: import("vue").DefineComponent<{
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    influence: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    dividerEl: import("vue").Ref<HTMLElement | undefined>;
    isMove: import("vue").Ref<boolean>;
    isHover: import("vue").Ref<boolean>;
    onMouseEnter(): void;
    onMouseLeave(): void;
    getCSS(): string;
    onDividerMouseDown(event: MouseEvent): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "move"[], "move", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    influence: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onMove?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    vertical: boolean;
    width: number;
    influence: boolean;
}, {}>;
export default _default;
