import { PropType } from 'vue';
import { Option } from './const';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<Option[]>;
        required: true;
        default(): never[];
    };
    value: (StringConstructor | NumberConstructor)[];
    /**
     * 使用箭头快速切换
     */
    arrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
}, {
    focus: import("vue").Ref<boolean>;
    rootEl: import("vue").Ref<any>;
    curValue: any;
    getStyle(): string;
    onLeftClick(): void;
    onRightClick(): void;
    onFocus(): void;
    onBlur(): void;
    onSelectChange(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:value" | "change" | "update:data")[], "update:value" | "change" | "update:data", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<Option[]>;
        required: true;
        default(): never[];
    };
    value: (StringConstructor | NumberConstructor)[];
    /**
     * 使用箭头快速切换
     */
    arrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    "onUpdate:data"?: ((...args: any[]) => any) | undefined;
}, {
    data: Option[];
    arrow: boolean;
    placeholder: string;
}, {}>;
export default _default;
