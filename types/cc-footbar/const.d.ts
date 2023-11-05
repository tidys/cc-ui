import { CmdData } from '../cc-command/const';
export declare const FootBarMsg: {
    Tips: string;
    RegCmd: string;
};
export declare function ShowTips(text: string): void;
export interface FootCmd {
    label: string;
    cmds: Array<CmdData>;
}
export declare function registerCmd(footCmd: FootCmd): void;
