import { DialogOptions } from './const';
import { UiWindowOptions } from '../cc-window/index';
declare const _default: import("vue").DefineComponent<{}, {
    dialogWindows: import("vue").Ref<{
        comp?: any;
        data?: any;
        clickOutsideClose?: boolean | undefined;
        id?: string | undefined;
        width?: number | undefined;
        height?: number | undefined;
        resize?: boolean | undefined;
        title?: string | undefined;
        closeCB?: (() => void | null) | undefined;
        responseCB?: ((data: UiWindowOptions) => void | null) | undefined;
    }[]>;
    getWindowOption(opt: DialogOptions): UiWindowOptions;
    getWindowRenderComponent(opt: DialogOptions): any;
    getWindowRenderComponentData(opt: DialogOptions): any;
    show: import("vue").Ref<boolean>;
    onWinClose: (opt: DialogOptions) => void;
    onMaskClick: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
export default _default;
