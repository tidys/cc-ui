import { PropType } from 'vue';
import { TableColumn, TableData } from './const';
declare const _default: import("vue").DefineComponent<{
    columns: {
        type: PropType<TableColumn[]>;
        default: () => never[];
    };
    data: {
        type: PropType<TableData[]>;
        default: () => never[];
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}, {
    onResize(): void;
    table: import("vue").Ref<any>;
    columnsWidth: import("vue").Ref<number[]>;
    bodyLineData: import("vue").Ref<{
        index: number;
        data: {
            columnIndexCurrent: number;
            columnIndexTotal: number;
            rowIndexCurrent: number;
            rowIndexTotal: number;
            key: string;
            value: any;
            width?: number | undefined;
        }[];
    }[]>;
    headLineData: import("vue").Ref<{
        index: number;
        data: {
            columnIndexCurrent: number;
            columnIndexTotal: number;
            rowIndexCurrent: number;
            rowIndexTotal: number;
            key: string;
            value: any;
            width?: number | undefined;
        }[];
    }[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    columns?: unknown;
    data?: unknown;
    color?: unknown;
} & {
    color: string;
    data: TableData[];
    columns: TableColumn[];
} & {}>, {
    color: string;
    data: TableData[];
    columns: TableColumn[];
}>;
export default _default;