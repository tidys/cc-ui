import ccui from '../index';
export const CmdMsg = {
    ShowCmd: 'ShowCmd',
    CloseCmd: 'CloseCmd',
}
export interface CmdData {
    label: string;
    cb: (() => void) | null;
};

export function showCommand(cmdArray: CmdData[]) {
    ccui.Emitter.emit(CmdMsg.ShowCmd, cmdArray);
}
export function closeCommand() {
    ccui.Emitter.emit(CmdMsg.CloseCmd);
}