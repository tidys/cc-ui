import { PropType } from 'vue';
import { ButtonGroupItem } from './const';
declare const _default: import("vue").DefineComponent<{
    items: {
        type: PropType<ButtonGroupItem[]>;
        default: () => never[];
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 按下后是否自动回复原来的样式
     */
    recover: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<ButtonGroupItem[]>;
        default: () => never[];
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 按下后是否自动回复原来的样式
     */
    recover: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    color: string;
    recover: boolean;
    items: ButtonGroupItem[];
}, {}>;
export default _default;
