declare const _default: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
    };
    expand: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 鼠标移动到header时，鼠标移入显示slot header，鼠标离开隐藏slot header
     */
    autoSlotHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否点击整个header控制折叠，默认只会点击标题才会
     */
    expandByFullHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    colorTitle: {
        type: StringConstructor;
        default: string;
    };
    colorHeader: {
        type: StringConstructor;
        default: string;
    };
}, {
    expand: import("vue").Ref<boolean>;
    visibleSlotHeader: import("vue").Ref<boolean>;
    name: import("vue").Ref<string>;
    getStyleHeader(): string;
    getStyleTitle(): string;
    onMouseEnter(): void;
    onMouseLeave(): void;
    onExpand: () => void;
    onClickHeader(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
    };
    expand: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 鼠标移动到header时，鼠标移入显示slot header，鼠标离开隐藏slot header
     */
    autoSlotHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否点击整个header控制折叠，默认只会点击标题才会
     */
    expandByFullHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    colorTitle: {
        type: StringConstructor;
        default: string;
    };
    colorHeader: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    expand: boolean;
    autoSlotHeader: boolean;
    expandByFullHeader: boolean;
    colorTitle: string;
    colorHeader: string;
}, {}>;
export default _default;
