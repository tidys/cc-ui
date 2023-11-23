export declare const CmdMsg: {
    ShowCmd: string;
    CloseCmd: string;
};
export interface CmdData {
    /**
     * 显示的文本
     */
    label: string;
    /**
     * 显示的icon
     */
    icon?: 'cmder' | 'qq' | 'book' | string;
    /**
     * 如果设置了url，将自动跳转到url，不会触发cb
     */
    url?: string;
    /**
     * 是否可见
     */
    visible?: boolean;
    /**
     * 点击回调
     */
    cb: (() => void) | null;
}
export declare function showCommand(cmdArray: CmdData[]): void;
export declare function closeCommand(): void;
