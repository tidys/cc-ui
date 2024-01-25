import { PropType } from 'vue';
import { UiWindowOptions } from './index';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<UiWindowOptions>;
    };
}, {
    windowEl: import("vue").Ref<any>;
    onWinClose: () => void;
    onMousedown: (event: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<UiWindowOptions>;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
