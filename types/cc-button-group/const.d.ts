export declare const Msg: {
    ButtonTap: string;
    Choose: string;
};
export declare const ProvideKey: {
    Emitter: string;
    ZIndex: string;
};
export interface ButtonGroupItem {
    /**
     * 是否隐藏
     */
    visible?: boolean;
    /**
     * 内置的icon，svg和icon二选一，优先使用icon
     */
    icon?: string;
    /**
     * 显示的svg，svg和icon二选一，优先使用icon
     */
    svg?: string;
    /**
     * 显示的文本
     */
    text?: string;
    /**
     * 显示的提示语
     */
    title?: string;
    /**
     * 用户自定义数据
     */
    userData?: any;
    /**
     * 点击回调
     */
    click?: (event: MouseEvent | null, data: ButtonGroupItem) => void;
}
export declare enum ButtonState {
    Normal = "normal",
    Press = "press"
}
