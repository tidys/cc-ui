import { PropType } from 'vue';
import { CellData } from './const';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<CellData>;
        default: () => void;
    };
}, {
    calcStyle(): string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
} & {
    data: CellData;
} & {}>, {
    data: CellData;
}>;
export default _default;
