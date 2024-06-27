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
     * 显示的icon，这是暂时没有对接上
     */
    svg?: string;
    /**
     * 内置的icon
     */
    icon?: string;
    /**
     * 显示的文本
     */
    text?: string;
    /**
     * 显示的提示语
     */
    title?: string;
    /**
     * 点击回调
     */
    click?: () => void;
}
export declare enum ButtonState {
    Normal = "normal",
    Press = "press"
}
