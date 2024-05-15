declare const _default: import("vue").DefineComponent<{
    percent: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
}, {
    bgElement: import("vue").Ref<HTMLElement | undefined>;
    getBgStyle(): string;
    getContentStyle(): string;
    getTipStyle(): string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    percent: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    color: string;
    size: number;
    bgColor: string;
    percent: number;
}, {}>;
export default _default;
