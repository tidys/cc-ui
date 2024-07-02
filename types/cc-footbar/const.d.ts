import { CmdData } from '../cc-command/const';
export declare const FootBarMsg: {
    Tips: string;
    RegCmd: string;
    Error: string;
    TipsArray: string;
};
export interface FootCmd {
    /**
     * 显示的文本，label和icon至少得有一个
     */
    label?: string;
    /**
     * 显示的icon，label和icon至少得有一个
     */
    icon?: 'cmder' | string;
    cmds: Array<CmdData>;
}
export declare function registerCmd(footCmd: FootCmd): void;
export interface TipOptions {
    /**
     * 显示的时间，单位毫秒，如果小于等于0，则永久显示，直到下个提示
     */
    duration?: number;
    /**
     * 文本显示的颜色
     */
    color?: string;
}
export declare function showTips(str: string, opts?: TipOptions): void;
export interface TipsArrayOptions {
    /**
     * 显示的提示文本
     */
    tips: Array<string>;
    /**
     * 间隔时间，单位s，默认2s
     */
    interval?: number;
    /**
     * 浮动时间，单位s，默认3s
     */
    offset?: number;
}
/**
 * 轮播显示提示，当用户主动调用showTips后，会中断这个轮播显示
 */
export declare function showTipsArray(opts: TipsArrayOptions): void;
export interface ErrorOptions {
    /**
     * 标题，默认 Error
     */
    title?: string;
    /**
     * 错误内容的颜色，默认红色
     */
    color?: string;
    /**
     * 当关闭时，是否重置，默认为false
     */
    resetWhenClose?: boolean;
}
export declare function showError(str: string, opts?: ErrorOptions): void;
