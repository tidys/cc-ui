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
    onClick(): void;
    onContextMenu(event: MouseEvent): void;
    calcStyle(): string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<CellData>;
        default: () => void;
    };
    placeholder: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    data: CellData;
    placeholder: boolean;
}, {}>;
export default _default;
