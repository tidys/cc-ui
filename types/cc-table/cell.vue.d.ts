import { PropType } from 'vue';
import { CellData } from './const';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<CellData>;
        default: () => void;
    };
    placeholder: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    calcStyle(): string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
    placeholder?: unknown;
} & {
    data: CellData;
    placeholder: boolean;
} & {}>, {
    data: CellData;
    placeholder: boolean;
}>;
export default _default;
