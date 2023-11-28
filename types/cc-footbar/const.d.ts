import { CmdData } from '../cc-command/const';
export declare const FootBarMsg: {
    Tips: string;
    RegCmd: string;
};
export declare function ShowTips(text: string): void;
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
