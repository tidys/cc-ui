import { PropType } from 'vue';
import { LineData, TableColumn } from './const';
declare const _default: import("vue").DefineComponent<{
    isHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    columns: {
        type: PropType<TableColumn[]>;
        default: () => never[];
    };
    data: {
        type: PropType<LineData[]>;
        default: () => never[];
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    isHeader?: unknown;
    columns?: unknown;
    data?: unknown;
} & {
    data: LineData[];
    isHeader: boolean;
    columns: TableColumn[];
} & {}>, {
    data: LineData[];
    isHeader: boolean;
    columns: TableColumn[];
}>;
export default _default;
