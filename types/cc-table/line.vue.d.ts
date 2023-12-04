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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
    placeholder?: unknown;
} & {
    placeholder: boolean;
} & {
    data?: CellData[] | undefined;
}>, {
    placeholder: boolean;
}>;
export default _default;
