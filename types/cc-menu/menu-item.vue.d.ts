import { PropType } from 'vue';
import { IUiMenuItem } from './const';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<IUiMenuItem>;
        required: true;
        default: () => {
            name: string;
            enabled: boolean;
            callback: null;
        };
    };
}, {
    getIsSeparator(): boolean;
    getIsMenu(): boolean;
    getIconStyle(): string;
    getIconClass(): string;
    onClick(event: MouseEvent): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<IUiMenuItem>;
        required: true;
        default: () => {
            name: string;
            enabled: boolean;
            callback: null;
        };
    };
}>>, {
    data: IUiMenuItem;
}, {}>;
export default _default;
