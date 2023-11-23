import { PropType } from 'vue';
import { LineData, TableColumn } from './const';
declare const _default: import("vue").DefineComponent<{
    widthInfo: {
        type: PropType<number[]>;
        default: () => never[];
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
    widthInfo?: unknown;
    columns?: unknown;
    data?: unknown;
} & {
    data: LineData[];
    widthInfo: number[];
    columns: TableColumn[];
} & {}>, {
    data: LineData[];
    widthInfo: number[];
    columns: TableColumn[];
}>;
export default _default;
