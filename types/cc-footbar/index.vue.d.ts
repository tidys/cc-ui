declare const _default: import("vue").DefineComponent<{
    version: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 访问计数的统计服务，如果为空字符串，则不使用
     */
    hintKey: {
        type: StringConstructor;
        default: string;
    };
}, {
    hintUrl: import("vue").Ref<string>;
    errorColor: import("vue").Ref<string>;
    elErrorPanel: import("vue").Ref<HTMLDivElement | undefined>;
    errorTitle: import("vue").Ref<string>;
    errorContent: import("vue").Ref<string>;
    showErrorPanel: import("vue").Ref<boolean>;
    verString: import("vue").Ref<string>;
    tips: import("vue").Ref<string>;
    tipColor: import("vue").Ref<string>;
    commands: import("vue").Ref<{
        label?: string | undefined;
        title?: string | undefined;
        icon?: string | undefined;
        cb?: (() => void) | null | undefined;
        cmds?: {
            label: string;
            icon?: string | undefined;
            url?: string | undefined;
            visible?: boolean | undefined;
            cb: (() => void) | null;
        }[] | undefined;
    }[]>;
    onClickNotify(): void;
    onCloseError(): void;
    onMouseDownLeftTop(event: MouseEvent): void;
    onMouseDownLeft(event: MouseEvent): void;
    onMouseDownTop(event: MouseEvent): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    version: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 访问计数的统计服务，如果为空字符串，则不使用
     */
    hintKey: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    version: string;
    hintKey: string;
}, {}>;
export default _default;
