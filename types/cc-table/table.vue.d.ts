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
    headColor: {
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
            breakChar?: boolean | undefined;
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
            breakChar?: boolean | undefined;
        }[];
    }[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: PropType<TableColumn[]>;
        default: () => never[];
    };
    data: {
        type: PropType<TableData[]>;
        default: () => never[];
    };
    headColor: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    data: TableData[];
    columns: TableColumn[];
    headColor: string;
}, {}>;
export default _default;
