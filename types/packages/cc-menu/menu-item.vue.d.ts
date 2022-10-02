import { PropType } from 'vue';
import { IUiMenuItem } from './index';
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
    onClick(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
} & {
    data: IUiMenuItem;
} & {}>, {
    data: IUiMenuItem;
}>;
export default _default;
