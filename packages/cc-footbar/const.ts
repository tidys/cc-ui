import ccui from '../index';

import { CmdData } from '../cc-command/const'
export const FootBarMsg = {
  Tips: 'footbar_tips',
  RegCmd: 'footbar_regcmd',
};
export function ShowTips(text: string) {
  ccui.Emitter.emit(FootBarMsg.Tips, text);
}

export interface FootCmd {
  label: string,
  cmds: Array<CmdData>;
}
export function registerCmd(footCmd: FootCmd) {
  ccui.Emitter.emit(FootBarMsg.RegCmd, footCmd);
}