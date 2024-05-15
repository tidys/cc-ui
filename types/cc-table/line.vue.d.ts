import { PropType } from 'vue';
import { CellData } from './const';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<CellData[]>;
    };
    placeholder: {
        type: BooleanConstructor;
        default: boolean;
    };
    isHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}, {
    bgColor: import("vue").Ref<string>;
    onClick(): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<CellData[]>;
    };
    placeholder: {
        type: BooleanConstructor;
        default: boolean;
    };
    isHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    color: string;
    placeholder: boolean;
    isHeader: boolean;
}, {}>;
export default _default;
