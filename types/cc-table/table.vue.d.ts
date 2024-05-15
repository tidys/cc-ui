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
    bodyColor: {
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
            bgColor?: string | undefined;
            textColor?: string | undefined;
            breakChar?: boolean | undefined;
            userData?: any;
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
            bgColor?: string | undefined;
            textColor?: string | undefined;
            breakChar?: boolean | undefined;
            userData?: any;
        }[];
    }[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cell-click" | "cell-context-menu")[], "cell-click" | "cell-context-menu", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    bodyColor: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onCell-click"?: ((...args: any[]) => any) | undefined;
    "onCell-context-menu"?: ((...args: any[]) => any) | undefined;
}, {
    data: TableData[];
    columns: TableColumn[];
    headColor: string;
    bodyColor: string;
}, {}>;
export default _default;
