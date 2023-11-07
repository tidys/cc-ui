import ccui from '../index';
export const CmdMsg = {
    ShowCmd: 'ShowCmd',
    CloseCmd: 'CloseCmd',
}
export interface CmdData {
    /**
     * 显示的文本
     */
    label: string;
    /**
     * 显示的icon
     */
    icon?: "cmder" | string,
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
};

export function showCommand(cmdArray: CmdData[]) {
    ccui.Emitter.emit(CmdMsg.ShowCmd, cmdArray);
}
export function closeCommand() {
    ccui.Emitter.emit(CmdMsg.CloseCmd);
}