import ccui from '../index';

import { CmdData } from '../cc-command/const';
export const FootBarMsg = {
  Tips: 'footbar_tips',
  RegCmd: 'footbar_regcmd',
};
export function ShowTips(text: string) {
  ccui.Emitter.emit(FootBarMsg.Tips, text);
}

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
export function registerCmd(footCmd: FootCmd) {
  ccui.Emitter.emit(FootBarMsg.RegCmd, footCmd);
}
