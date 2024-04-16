declare const _default: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
    };
    tooltip: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
}, {
    tooltipElement: import("vue").Ref<HTMLElement | undefined>;
    tips: import("vue").Ref<HTMLElement | undefined>;
    isShowTips: import("vue").Ref<boolean>;
    arrow: import("vue").Ref<HTMLElement | undefined>;
    text: import("vue").Ref<HTMLElement | undefined>;
    name: import("vue").Ref<string>;
    isHove: import("vue").Ref<boolean>;
    onHover(event: any): void;
    onOver(): void;
    getValueStyle(): string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
    };
    tooltip: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tooltip: string;
    align: string;
}, {}>;
export default _default;
