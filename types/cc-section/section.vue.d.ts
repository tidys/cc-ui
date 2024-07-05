declare const _default: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
    };
    expand: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    expand: import("vue").Ref<boolean>;
    name: import("vue").Ref<string>;
    onExpand(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
    };
    expand: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    expand: boolean;
}, {}>;
export default _default;
