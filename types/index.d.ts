/// <reference types="short-uuid" />
import { TinyEmitter } from 'tiny-emitter';
import { App } from 'vue';
import { buttonGroup } from './cc-button-group/index';
import { command } from './cc-command/index';
import { dialog } from './cc-dialog/index';
import { divider } from './cc-divider/index';
import { footbar } from './cc-footbar/index';
import { menu } from './cc-menu/index';
import { select } from './cc-select/index';
import { prop } from './cc-prop/index';
import { color } from './cc-color/index';
import { table } from './cc-table/index';
import { tree } from './cc-tree/index';
import './common/scrollbar.less';
export declare const install: (app: App) => void;
declare const _default: {
    divider: typeof divider;
    buttonGroup: typeof buttonGroup;
    color: typeof color;
    prop: typeof prop;
    menu: typeof menu;
    tree: typeof tree;
    dialog: typeof dialog;
    footbar: typeof footbar;
    command: typeof command;
    table: typeof table;
    select: typeof select;
    install: (app: App<any>) => void;
    uiElement: import("./element").UiElement;
    Emitter: TinyEmitter;
    components: {
        CCDock: import("vue").DefineComponent<{
            name: {
                type: StringConstructor;
                default: string;
            };
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            name: {
                type: StringConstructor;
                default: string;
            };
        }>>, {
            name: string;
        }, {}>;
        CCAd: import("vue").DefineComponent<{
            url: {
                type: StringConstructor;
                default: string;
            };
        }, {
            text: import("vue").Ref<string>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            url: {
                type: StringConstructor;
                default: string;
            };
        }>>, {
            url: string;
        }, {}>;
        CCTree: import("vue").DefineComponent<{
            value: {
                type: import("vue").PropType<tree.ITreeData[]>;
                default: () => never[];
                required: true;
            };
            showIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
            bgColor: {
                type: StringConstructor;
                default: string;
            };
            defaultExpandAll: {
                type: BooleanConstructor;
                default: boolean;
            };
            search: {
                type: BooleanConstructor;
                default: boolean;
            };
            expandKeys: {
                type: import("vue").PropType<string[]>;
                default: () => never[];
            };
        }, {
            onChangeMatchCase(): void;
            onChangePathSplit(): void;
            matchCase: import("vue").Ref<boolean>;
            pathSplit: import("vue").Ref<boolean>;
            searchValue: import("vue").Ref<string>;
            treeElement: import("vue").Ref<HTMLDivElement | undefined>;
            childrenElements: import("vue").Ref<import("vue").DefineComponent<{
                value: {
                    type: import("vue").PropType<tree.ITreeData>;
                    default: () => {
                        text: string;
                    };
                    required: true;
                };
                indent: {
                    type: NumberConstructor;
                    default: number;
                };
                color: {
                    type: StringConstructor;
                    default: string;
                };
            }, {
                getClass(item: string, index: number): string;
                highlightCharIndex: import("vue").Ref<number[]>;
                show: import("vue").Ref<boolean>;
                isFlash: import("vue").Ref<boolean>;
                rootEl: import("vue").Ref<HTMLDivElement | undefined>;
                childrenElements: import("vue").Ref<never[]>;
                fold: import("vue").Ref<boolean>;
                backgroundColor: import("vue").Ref<string>;
                selected: boolean;
                doFold: (b: boolean) => void;
                doSelect: (scroll?: boolean) => void;
                ShowIcon: () => false;
                onFold(): void;
                mouseEnter(): void;
                mouseMenu(event: MouseEvent): void;
                mouseLeave(): void;
                onClick(): void;
                getIconClass(): string;
                getIconStyle(): string;
                getArrowClass(): "iconfont icon_arrow_down" | "iconfont icon_arrow_right";
                getArrowStyle(): string;
                getNameStyle(): string;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                value: {
                    type: import("vue").PropType<tree.ITreeData>;
                    default: () => {
                        text: string;
                    };
                    required: true;
                };
                indent: {
                    type: NumberConstructor;
                    default: number;
                };
                color: {
                    type: StringConstructor;
                    default: string;
                };
            }>>, {
                color: string;
                value: tree.ITreeData;
                indent: number;
            }, {}>[]>;
            handExpand(id: string, options?: tree.HandExpandOptions): void;
            handChoose(id: string): void;
            handSelect(index?: number): void;
            onInput(str: string): void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            value: {
                type: import("vue").PropType<tree.ITreeData[]>;
                default: () => never[];
                required: true;
            };
            showIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
            bgColor: {
                type: StringConstructor;
                default: string;
            };
            defaultExpandAll: {
                type: BooleanConstructor;
                default: boolean;
            };
            search: {
                type: BooleanConstructor;
                default: boolean;
            };
            expandKeys: {
                type: import("vue").PropType<string[]>;
                default: () => never[];
            };
        }>>, {
            search: boolean;
            value: tree.ITreeData[];
            bgColor: string;
            showIcon: boolean;
            defaultExpandAll: boolean;
            expandKeys: string[];
        }, {}>;
        CCProcess: import("vue").DefineComponent<{
            percent: {
                type: NumberConstructor;
                default: number;
            };
            size: {
                type: NumberConstructor;
                default: number;
            };
            color: {
                type: StringConstructor;
                default: string;
            };
            bgColor: {
                type: StringConstructor;
                default: string;
            };
        }, {
            bgElement: import("vue").Ref<HTMLElement | undefined>;
            getBgStyle(): string;
            getContentStyle(): string;
            getTipStyle(): string;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            percent: {
                type: NumberConstructor;
                default: number;
            };
            size: {
                type: NumberConstructor;
                default: number;
            };
            color: {
                type: StringConstructor;
                default: string;
            };
            bgColor: {
                type: StringConstructor;
                default: string;
            };
        }>>, {
            color: string;
            size: number;
            bgColor: string;
            percent: number;
        }, {}>;
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
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "move"[], "move", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        }>> & {
            onMove?: ((...args: any[]) => any) | undefined;
        }, {
            color: string;
            vertical: boolean;
            width: number;
            influence: boolean;
        }, {}>;
        CCButtonGroup: import("vue").DefineComponent<{
            items: {
                type: import("vue").PropType<buttonGroup.ButtonGroupItem[]>;
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
            chooseItem: {
                type: import("vue").PropType<buttonGroup.ButtonGroupItem>;
                default: () => {};
            };
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            items: {
                type: import("vue").PropType<buttonGroup.ButtonGroupItem[]>;
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
            chooseItem: {
                type: import("vue").PropType<buttonGroup.ButtonGroupItem>;
                default: () => {};
            };
        }>>, {
            color: string;
            recover: boolean;
            items: buttonGroup.ButtonGroupItem[];
            chooseItem: buttonGroup.ButtonGroupItem;
        }, {}>;
        CCTable: import("vue").DefineComponent<{
            columns: {
                type: import("vue").PropType<table.TableColumn[]>;
                default: () => never[];
            };
            data: {
                type: import("vue").PropType<table.TableData[]>;
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
                type: import("vue").PropType<table.TableColumn[]>;
                default: () => never[];
            };
            data: {
                type: import("vue").PropType<table.TableData[]>;
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
            data: table.TableData[];
            columns: table.TableColumn[];
            headColor: string;
            bodyColor: string;
        }, {}>;
        CCCommand: import("vue").DefineComponent<{
            items: {
                type: import("vue").PropType<command.CmdData[]>;
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
            getRoot(): HTMLElement;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            items: {
                type: import("vue").PropType<command.CmdData[]>;
                default: () => never[];
            };
        }>>, {
            items: command.CmdData[];
        }, {}>;
        CCFootBar: import("vue").DefineComponent<{
            version: {
                type: StringConstructor;
                default: string;
            };
        }, {
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
        }>>, {
            version: string;
        }, {}>;
        CCButton: import("vue").DefineComponent<{
            color: {
                type: StringConstructor;
                default: string;
            };
            tooltip: {
                type: StringConstructor;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, {
            isDisabled: any;
            arrow: import("vue").Ref<HTMLElement | undefined>;
            text: import("vue").Ref<HTMLElement | undefined>;
            tips: import("vue").Ref<HTMLDivElement | undefined>;
            isShowTips: import("vue").Ref<boolean>;
            theme: import("vue").Ref<{
                background: string;
            }>;
            isClick: import("vue").Ref<boolean>;
            onHover(event: any): void;
            onMouseup(): void;
            onMousedown(): void;
            onClick(): void;
            onMouseenter(): void;
            onMouseleave(): void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "confirm"[], "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            color: {
                type: StringConstructor;
                default: string;
            };
            tooltip: {
                type: StringConstructor;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onConfirm?: ((...args: any[]) => any) | undefined;
        }, {
            color: string;
            tooltip: string;
            disabled: boolean;
        }, {}>;
        CCCheckBox: import("vue").DefineComponent<{
            value: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
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
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:value" | "change")[], "update:value" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            value: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            label: {
                type: StringConstructor;
                default: string;
            };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }, {
            label: string;
            disabled: boolean;
            value: boolean;
        }, {}>;
        CCColor: import("vue").DefineComponent<{
            color: {
                type: StringConstructor;
                default: string;
            };
            alpha: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            showColorText: {
                type: BooleanConstructor;
                default: () => boolean;
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
            textColor(): "#000000" | "#ffffff";
            onShowPanel(): void;
            onColorChangeSaturation(color: string): void;
            onChangeColorHue(color: string): void;
            onColorChangeHex(color: string): void;
            onColorListSelect(color: string): void;
            onFocusin(event: FocusEvent): void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:color")[], "change" | "update:color", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            color: {
                type: StringConstructor;
                default: string;
            };
            alpha: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            showColorText: {
                type: BooleanConstructor;
                default: () => boolean;
            };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:color"?: ((...args: any[]) => any) | undefined;
        }, {
            color: string;
            disabled: boolean;
            alpha: boolean;
            showColorText: boolean;
        }, {}>;
        CCSection: import("vue").DefineComponent<{
            name: {
                type: StringConstructor;
            };
            expand: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoSlotHeader: {
                type: BooleanConstructor;
                default: boolean;
            };
            expandByFullHeader: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, {
            expand: import("vue").Ref<boolean>;
            visibleSlotHeader: import("vue").Ref<boolean>;
            name: import("vue").Ref<string>;
            onMouseEnter(): void;
            onMouseLeave(): void;
            onExpand: () => void;
            onClickHeader(): void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            name: {
                type: StringConstructor;
            };
            expand: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoSlotHeader: {
                type: BooleanConstructor;
                default: boolean;
            };
            expandByFullHeader: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, {
            expand: boolean;
            autoSlotHeader: boolean;
            expandByFullHeader: boolean;
        }, {}>;
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
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            docUrl: {
                type: StringConstructor;
                default: string;
            };
        }>>, {
            docUrl: string;
        }, {}>;
        CCSelect: import("vue").DefineComponent<{
            data: {
                type: import("vue").PropType<select.Option[]>;
                required: true;
                default(): never[];
            };
            value: (StringConstructor | NumberConstructor)[];
            arrow: {
                type: BooleanConstructor;
                default: boolean;
            };
            placeholder: {
                type: StringConstructor;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, {
            focus: import("vue").Ref<boolean>;
            rootEl: import("vue").Ref<any>;
            curValue: any;
            getStyle(): string;
            onLeftClick(): void;
            onRightClick(): void;
            onFocus(): void;
            onBlur(): void;
            onSelectChange(): void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:value" | "change" | "update:data")[], "update:value" | "change" | "update:data", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            data: {
                type: import("vue").PropType<select.Option[]>;
                required: true;
                default(): never[];
            };
            value: (StringConstructor | NumberConstructor)[];
            arrow: {
                type: BooleanConstructor;
                default: boolean;
            };
            placeholder: {
                type: StringConstructor;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
            "onUpdate:data"?: ((...args: any[]) => any) | undefined;
        }, {
            data: select.Option[];
            disabled: boolean;
            arrow: boolean;
            placeholder: string;
        }, {}>;
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
            placeholder: {
                type: StringConstructor;
                default: string;
            };
        }, {
            hover: import("vue").Ref<boolean>;
            text: import("vue").Ref<string>;
            borderColor: import("vue").Ref<string>;
            getCSS(): string;
            onInput(): void;
            onFocusin(event: FocusEvent): void;
            onClean(): void;
            onFocusout(): void;
            onBlur(): void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:value" | "change" | "input")[], "input" | "update:value" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
            placeholder: {
                type: StringConstructor;
                default: string;
            };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            onInput?: ((...args: any[]) => any) | undefined;
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }, {
            readonly: boolean;
            disabled: boolean;
            value: string;
            maxlength: number;
            directory: boolean;
            placeholder: string;
        }, {}>;
        CCInputNumber: import("vue").DefineComponent<{
            tip: {
                type: StringConstructor;
                default: string;
            };
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
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:value" | "change")[], "update:value" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            tip: {
                type: StringConstructor;
                default: string;
            };
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
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }, {
            readonly: boolean;
            disabled: boolean;
            value: number;
            tip: string;
            step: number;
        }, {}>;
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
            expand: {
                type: BooleanConstructor;
                default: boolean;
            };
            icon: {
                type: BooleanConstructor;
                default: boolean;
            };
            arrow: {
                type: BooleanConstructor;
                default: boolean;
            };
            step: {
                type: NumberConstructor;
                default: number;
            };
            slide: {
                type: BooleanConstructor;
                default: boolean;
            };
            indent: {
                type: NumberConstructor;
                default: number;
            };
            hint: {
                type: BooleanConstructor;
                default: boolean;
            };
            headWidth: {
                type: StringConstructor;
                default: () => string;
            };
        }, {
            title: import("vue").Ref<string>;
            tooltipElement: import("vue").Ref<HTMLElement | undefined>;
            tips: import("vue").Ref<HTMLElement | undefined>;
            isShowTips: import("vue").Ref<boolean>;
            arrow: import("vue").Ref<HTMLElement | undefined>;
            isExpand: import("vue").Ref<boolean>;
            text: import("vue").Ref<HTMLElement | undefined>;
            name: import("vue").Ref<string>;
            isHove: import("vue").Ref<boolean>;
            onMouseDown(event: MouseEvent): void;
            getArrowClass(): string;
            onHover(event: any): void;
            onClickArrow(): void;
            onOver(): void;
            getValueStyle(): string;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("slide" | "changeExpand" | "update:expand")[], "slide" | "changeExpand" | "update:expand", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
            expand: {
                type: BooleanConstructor;
                default: boolean;
            };
            icon: {
                type: BooleanConstructor;
                default: boolean;
            };
            arrow: {
                type: BooleanConstructor;
                default: boolean;
            };
            step: {
                type: NumberConstructor;
                default: number;
            };
            slide: {
                type: BooleanConstructor;
                default: boolean;
            };
            indent: {
                type: NumberConstructor;
                default: number;
            };
            hint: {
                type: BooleanConstructor;
                default: boolean;
            };
            headWidth: {
                type: StringConstructor;
                default: () => string;
            };
        }>> & {
            onSlide?: ((...args: any[]) => any) | undefined;
            onChangeExpand?: ((...args: any[]) => any) | undefined;
            "onUpdate:expand"?: ((...args: any[]) => any) | undefined;
        }, {
            tooltip: string;
            arrow: boolean;
            expand: boolean;
            step: number;
            slide: boolean;
            align: string;
            icon: boolean;
            indent: number;
            hint: boolean;
            headWidth: string;
        }, {}>;
        CCMenu: import("vue").DefineComponent<{}, {
            opacity: import("vue").Ref<number>;
            menuEl: import("vue").Ref<HTMLDivElement | undefined>;
            menus: import("vue").Ref<{
                name?: string | undefined;
                type?: menu.MenuType | undefined;
                enabled?: boolean | undefined;
                visible?: boolean | undefined;
                selected?: boolean | undefined;
                icon?: string | undefined;
                shortKey?: string | undefined;
                callback?: ((item: menu.IUiMenuItem) => void | null) | undefined;
                enter?: ((item: menu.IUiMenuItem) => void) | null | undefined;
                leave?: ((item: menu.IUiMenuItem) => void) | null | undefined;
            }[]>;
            menuPositionX: import("vue").Ref<number>;
            menuPositionY: import("vue").Ref<number>;
            getRoot(): HTMLElement;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
        CCSlider: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
        CCTextarea: import("vue").DefineComponent<{
            value: {
                type: StringConstructor;
                default: string;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, {
            text: import("vue").Ref<string>;
            onChange(): void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:value" | "change")[], "update:value" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            value: {
                type: StringConstructor;
                default: string;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }, {
            readonly: boolean;
            value: string;
        }, {}>;
        CCWindow: import("vue").DefineComponent<{
            data: {
                type: import("vue").PropType<import("./cc-window").UiWindowOptions>;
            };
        }, {
            windowEl: import("vue").Ref<any>;
            onWinClose: () => void;
            onMousedown: (event: MouseEvent) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            data: {
                type: import("vue").PropType<import("./cc-window").UiWindowOptions>;
            };
        }>> & {
            onClose?: ((...args: any[]) => any) | undefined;
        }, {}, {}>;
        CCDialog: import("vue").DefineComponent<{}, {
            dialogWindows: import("vue").Ref<{
                comp?: any;
                data?: any;
                backgroundColor?: string | undefined;
                clickOutsideClose?: boolean | undefined;
                id?: import("short-uuid").SUUID | undefined;
                width?: number | undefined;
                height?: number | undefined;
                resize?: boolean | undefined;
                title?: string | undefined;
                closeCB?: (() => void | null) | undefined;
                responseCB?: ((data: import("./cc-window").UiWindowOptions) => void | null) | undefined;
            }[]>;
            getWindowOption(opt: dialog.DialogOptions): import("./cc-window").UiWindowOptions;
            getWindowRenderComponent(opt: dialog.DialogOptions): any;
            getWindowRenderComponentData(opt: dialog.DialogOptions): any;
            getWindowRenderComponentID(opt: dialog.DialogOptions): import("short-uuid").SUUID | undefined;
            show: import("vue").Ref<boolean>;
            onWinClose: (id: string) => void;
            onMaskClick: () => void;
            getRoot(): HTMLElement;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
    };
};
export default _default;
