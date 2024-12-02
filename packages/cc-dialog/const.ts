import ccui from '../index';
import { UiWindowOptions } from '../cc-window/index';

export const DialogMsg = {
  ShowDialog: 'show-dialog',
  /**
   * 组件的porps.id传递过来即可关闭component所在的dialog
   *
   * 组件emit("close")可以直接关闭
   */
  CloseDialog: 'close-dialog',
};

/**
 * 一句带url的提示语，目前暂时只支持一个url
 * 示例：
 * label: 打开{cocos}
 * url:www.cocos.com
 * 最终会{cocos}被解析为a标签，href指向url
 */
class DialogUrlData {
  url: string = '';
  label: string = '';
  /**
   * 自动跳转到url，0为不跳转，单位s
   */
  jump: number = 0;
}

class DialogOptions extends UiWindowOptions {
  /**
   * DefineComponent | null,// 组件实例
   */
  comp?: any;
  /**
   * 传递给组件的数据
   */
  data?: any;
  /**
   * 对话框的背景色
   */
  backgroundColor?: string;
  /**
   * 点击dialog外部是否关闭，默认关闭
   */
  clickOutsideClose?: boolean;
}
/**
 *  这种辅助类的函数一般放在const里面
 */
function showDialog(opts: DialogOptions) {
  ccui.Emitter.emit(DialogMsg.ShowDialog, opts);
}
export { DialogOptions, DialogUrlData, showDialog };
