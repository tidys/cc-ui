export declare const components: {
    CCDivider: import("vue").DefineComponent<{
        vertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: NumberConstructor;
            default: number;
        };
        influence: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {
        dividerEl: import("vue").Ref<HTMLElement | undefined>;
        isMove: import("vue").Ref<boolean>;
        isHover: import("vue").Ref<boolean>;
        onMouseEnter(): void;
        onMouseLeave(): void;
        getCSS(): string;
        onDividerMouseDown(event: MouseEvent): void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "move"[], "move", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        vertical?: unknown;
        color?: unknown;
        width?: unknown;
        influence?: unknown;
    } & {
        color: string;
        width: number;
        vertical: boolean;
        influence: boolean;
    } & {}> & {
        onMove?: ((...args: any[]) => any) | undefined;
    }, {
        color: string;
        width: number;
        vertical: boolean;
        influence: boolean;
    }>;
    CCButtonGroup: import("vue").DefineComponent<{
        items: {
            type: import("vue").PropType<import("./cc-button-group/const").ButtonGroupItem[]>;
            default: () => never[];
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        recover: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        items?: unknown;
        color?: unknown;
        recover?: unknown;
    } & {
        color: string;
        recover: boolean;
        items: import("./cc-button-group/const").ButtonGroupItem[];
    } & {}>, {
        color: string;
        recover: boolean;
        items: import("./cc-button-group/const").ButtonGroupItem[];
    }>;
    CCTable: import("vue").DefineComponent<{
        columns: {
            type: import("vue").PropType<import("./cc-table/const").TableColumn[]>;
            default: () => never[];
        };
        data: {
            type: import("vue").PropType<import("./cc-table/const").TableData[]>;
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
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        columns?: unknown;
        data?: unknown;
        headColor?: unknown;
    } & {
        data: import("./cc-table/const").TableData[];
        columns: import("./cc-table/const").TableColumn[];
        headColor: string;
    } & {}>, {
        data: import("./cc-table/const").TableData[];
        columns: import("./cc-table/const").TableColumn[];
        headColor: string;
    }>;
    CCCommand: import("vue").DefineComponent<{
        items: {
            type: import("vue").PropType<import("./cc-command/const").CmdData[]>;
            default: () => never[];
        };
    }, {
        show: import("vue").Ref<boolean>;
        commands: import("vue").Ref<{
            label: string;
            icon?: string | undefined;
            url?: string | undefined;
            visible?: boolean | undefined;
            cb: (() => void) | null;
        }[]>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        items?: unknown;
    } & {
        items: import("./cc-command/const").CmdData[];
    } & {}>, {
        items: import("./cc-command/const").CmdData[];
    }>;
    CCFootBar: import("vue").DefineComponent<{
        version: {
            type: StringConstructor;
            default: string;
        };
    }, {
        verString: import("vue").Ref<string>;
        tips: import("vue").Ref<string>;
        commands: import("vue").Ref<{
            label?: string | undefined;
            icon?: string | undefined;
            cmds: {
                label: string;
                icon?: string | undefined;
                url?: string | undefined;
                visible?: boolean | undefined;
                cb: (() => void) | null;
            }[];
        }[]>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        version?: unknown;
    } & {
        version: string;
    } & {}>, {
        version: string;
    }>;
    CCButton: import("vue").DefineComponent<{
        transition: {
            type: StringConstructor;
            default: string;
            validator: (value: unknown) => boolean;
        };
        color: {
            type: StringConstructor;
        };
        texture: {
            type: StringConstructor;
        };
        tooltip: {
            type: StringConstructor;
            default: string;
        };
    }, {
        arrow: import("vue").Ref<HTMLElement | undefined>;
        text: import("vue").Ref<HTMLElement | undefined>;
        tips: import("vue").Ref<HTMLDivElement | undefined>;
        isShowTips: import("vue").Ref<boolean>;
        theme: {
            background: string;
        };
        isClick: import("vue").Ref<boolean>;
        onHover(event: any): void;
        onMouseup(): void;
        onMousedown(): void;
        onMouseenter(): void;
        onMouseleave(): void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, never[], never, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        transition?: unknown;
        color?: unknown;
        texture?: unknown;
        tooltip?: unknown;
    } & {
        transition: string;
        tooltip: string;
    } & {
        color?: string | undefined;
        texture?: string | undefined;
    }> & {}, {
        transition: string;
        tooltip: string;
    }>;
    CCCheckBox: import("vue").DefineComponent<{
        value: {
            type: BooleanConstructor;
            default: boolean;
        };
        label: {
            type: StringConstructor;
            default: string;
        };
    }, {
        val: import("vue").Ref<boolean>;
        label: import("vue").Ref<string>;
        onChange(): void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:value" | "change")[], "update:value" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        value?: unknown;
        label?: unknown;
    } & {
        label: string;
        value: boolean;
    } & {}> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    }, {
        label: string;
        value: boolean;
    }>;
    CCColor: import("vue").DefineComponent<{
        color: {
            type: StringConstructor;
            default: string;
        };
        alpha: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {
        color: import("vue").Ref<HTMLElement | undefined>;
        panel: import("vue").Ref<HTMLElement | undefined>;
        saturationComp: import("vue").Ref<any>;
        colorList: import("vue").Ref<string[]>;
        hexColor: import("vue").Ref<string>;
        hueValue: import("vue").Ref<number>;
        style: import("vue").ComputedRef<{
            backgroundColor: string;
        }>;
        show: import("vue").Ref<boolean>;
        onShowPanel(): void;
        onColorChangeSaturation(color: string): void;
        onChangeColorHue(color: string): void;
        onColorChangeHex(color: string): void;
        onColorListSelect(color: string): void;
        onFocusin(event: FocusEvent): void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:color")[], "change" | "update:color", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        color?: unknown;
        alpha?: unknown;
    } & {
        color: string;
        alpha: boolean;
    } & {}> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:color"?: ((...args: any[]) => any) | undefined;
    }, {
        color: string;
        alpha: boolean;
    }>;
    CCSection: import("vue").DefineComponent<{
        name: {
            type: StringConstructor;
        };
        expand: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {
        fold: import("vue").Ref<boolean>;
        name: import("vue").Ref<string>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        name?: unknown;
        expand?: unknown;
    } & {
        expand: boolean;
    } & {
        name?: string | undefined;
    }>, {
        expand: boolean;
    }>;
    CCHelp: import("vue").DefineComponent<{
        docUrl: {
            type: StringConstructor;
            default: string;
        };
    }, {
        items: import("vue").Ref<string[]>;
        showDetails: import("vue").Ref<boolean>;
        onClickQQ(): void;
        onClickDoc(): void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        docUrl?: unknown;
    } & {
        docUrl: string;
    } & {}>, {
        docUrl: string;
    }>;
    CCSelect: import("vue").DefineComponent<{
        data: {
            type: import("vue").PropType<import("./cc-select/const").Option[]>;
            required: true;
            default(): never[];
        };
        value: (StringConstructor | NumberConstructor)[];
    }, {
        curValue: any;
        onSelectChange(): void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:value" | "change" | "update:data")[], "update:value" | "change" | "update:data", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        data?: unknown;
        value?: unknown;
    } & {
        data: import("./cc-select/const").Option[];
    } & {
        value?: string | number | undefined;
    }> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        "onUpdate:data"?: ((...args: any[]) => any) | undefined;
    }, {
        data: import("./cc-select/const").Option[];
    }>;
    CCInput: import("vue").DefineComponent<{
        value: {
            type: StringConstructor;
            default: string;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        maxlength: {
            type: NumberConstructor;
            default: number;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        directory: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {
        text: import("vue").Ref<string>;
        borderColor: import("vue").Ref<string>;
        getCSS(): string;
        onFocusin(): void;
        onFocusout(): void;
        onBlur(): void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:value" | "change")[], "update:value" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        value?: unknown;
        readonly?: unknown;
        maxlength?: unknown;
        disabled?: unknown;
        directory?: unknown;
    } & {
        readonly: boolean;
        value: string;
        maxlength: number;
        disabled: boolean;
        directory: boolean;
    } & {}> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    }, {
        readonly: boolean;
        value: string;
        maxlength: number;
        disabled: boolean;
        directory: boolean;
    }>;
    CCInputNumber: import("vue").DefineComponent<{
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        value: {
            type: NumberConstructor;
            required: true;
            default: number;
        };
        min: {
            type: NumberConstructor;
        };
        max: {
            type: NumberConstructor;
        };
        step: {
            type: NumberConstructor;
            default: number;
        };
    }, {
        val: import("vue").Ref<number>;
        input: import("vue").Ref<any>;
        onChange(): void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:value" | "change")[], "update:value" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        disabled?: unknown;
        readonly?: unknown;
        value?: unknown;
        min?: unknown;
        max?: unknown;
        step?: unknown;
    } & {
        readonly: boolean;
        value: number;
        disabled: boolean;
        step: number;
    } & {
        min?: number | undefined;
        max?: number | undefined;
    }> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    }, {
        readonly: boolean;
        value: number;
        disabled: boolean;
        step: number;
    }>;
    CCProp: import("vue").DefineComponent<{
        name: {
            type: StringConstructor;
        };
        tooltip: {
            type: StringConstructor;
            default: string;
        };
        align: {
            type: StringConstructor;
            default: string;
        };
    }, {
        tips: import("vue").Ref<HTMLElement | undefined>;
        isShowTips: import("vue").Ref<boolean>;
        arrow: import("vue").Ref<HTMLElement | undefined>;
        text: import("vue").Ref<HTMLElement | undefined>;
        name: import("vue").Ref<string>;
        isHove: import("vue").Ref<boolean>;
        onHover(event: any): void;
        onOver(): void;
        getValueStyle(): string;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        name?: unknown;
        tooltip?: unknown;
        align?: unknown;
    } & {
        tooltip: string;
        align: string;
    } & {
        name?: string | undefined;
    }>, {
        tooltip: string;
        align: string;
    }>;
    CCMenu: import("vue").DefineComponent<{}, {
        menuEl: import("vue").Ref<HTMLDivElement | undefined>;
        menus: import("vue").Ref<{
            name: string;
            enabled?: true | undefined;
            callback: (item: import("./cc-menu/const").IUiMenuItem) => void | null;
        }[]>;
        menuPositionX: import("vue").Ref<number>;
        menuPositionY: import("vue").Ref<number>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
    CCSlider: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
    CCTextarea: import("vue").DefineComponent<{
        data: {
            type: StringConstructor;
            default: string;
        };
    }, {
        text: import("vue").Ref<string>;
        onChange(): void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:data")[], "change" | "update:data", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        data?: unknown;
    } & {
        data: string;
    } & {}> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:data"?: ((...args: any[]) => any) | undefined;
    }, {
        data: string;
    }>;
    CCWindow: import("vue").DefineComponent<{
        data: {
            type: import("vue").PropType<import("./cc-window").UiWindowOptions>;
        };
    }, {
        windowEl: import("vue").Ref<any>;
        onWinClose: () => void;
        onMousedown: (event: MouseEvent) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        data?: unknown;
    } & {} & {
        data?: import("./cc-window").UiWindowOptions | undefined;
    }> & {
        onClose?: ((...args: any[]) => any) | undefined;
    }, {}>;
    CCDialog: import("vue").DefineComponent<{}, {
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
            responseCB?: ((data: import("./cc-window").UiWindowOptions) => void | null) | undefined;
        }[]>;
        getWindowOption(opt: import("./cc-dialog/const").DialogOptions): import("./cc-window").UiWindowOptions;
        getWindowRenderComponent(opt: import("./cc-dialog/const").DialogOptions): any;
        getWindowRenderComponentData(opt: import("./cc-dialog/const").DialogOptions): any;
        show: import("vue").Ref<boolean>;
        onWinClose: (opt: import("./cc-dialog/const").DialogOptions) => void;
        onMaskClick: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
};
