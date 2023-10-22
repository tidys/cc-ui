import ccui from '../index';
export const FootBarMsg = {
  Tips: 'footbar_tips'
};
export function ShowTips(text: string) {
  ccui.Emitter.emit(FootBarMsg.Tips, text);
}
