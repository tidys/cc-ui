import { PropType } from 'vue';
import { LineData, TableColumn, TableData } from './const';
declare const _default: import("vue").DefineComponent<{
    columns: {
        type: PropType<TableColumn[]>;
        default: () => never[];
    };
    data: {
        type: PropType<TableData[]>;
        default: () => never[];
    };
}, {
    onResize(): void;
    table: import("vue").Ref<any>;
    columnsWidth: import("vue").Ref<number[]>;
    bodyLineData: LineData[];
    headLineData: LineData[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    columns?: unknown;
    data?: unknown;
} & {
    data: TableData[];
    columns: TableColumn[];
} & {}>, {
    data: TableData[];
    columns: TableColumn[];
}>;
export default _default;
