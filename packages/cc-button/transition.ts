import { ref, reactive } from 'vue';
import chroma from 'chroma-js'; // fixme 有时候有default，有时候没有

interface StyleOptions {
  background: string;
}

abstract class CocosUiElement {
  onMouseup(styles: StyleOptions) {}

  onMousedown(styles: StyleOptions) {}

  onMouseenter(styles: StyleOptions) {}

  onMouseleave(styles: StyleOptions) {}
}

class TransitionColor extends CocosUiElement {
  public color = '';

  constructor(props: any) {
    super();
    this.color = this._getColor(props.color || '#4e4e4e');
  }

  _getColor(color: string) {
    switch (color) {
      case 'red':
        color = '#b54344';
        break;
      case 'green':
        color = '#6b9e51';
        break;
      case 'blue':
        color = '#4281b6';
        break;
    }
    return color;
  }

  onMouseup(styles: StyleOptions) {
    styles.background = this.color;
  }

  onMousedown(styles: StyleOptions): void {
    styles.background = chroma(this.color).darken(0.5).hex();
  }

  onMouseenter(styles: StyleOptions): void {
    styles.background = chroma(this.color).brighten(0.3).hex();
  }

  onMouseleave(styles: StyleOptions): void {
    styles.background = this.color;
  }
}

class TransitionSprite implements CocosUiElement {
  onMousedown(): void {}

  onMouseenter(): void {}

  onMouseleave(): void {}

  onMouseup(): void {}
}

export class Transition implements CocosUiElement {
  private instance: CocosUiElement | null = null;
  public theme = reactive({ background: '' });

  constructor(transition: string, props: any) {
    if (transition === 'sprite') {
      this.instance = new TransitionSprite();
    } else if (transition === 'color') {
      const instance = new TransitionColor(props);
      this.theme.background = instance.color;
      this.instance = instance;
    }
  }

  onMousedown(): void {
    this.instance && this.instance.onMousedown(this.theme);
  }

  onMouseenter(): void {
    this.instance && this.instance.onMouseenter(this.theme);
  }

  onMouseleave(): void {
    this.instance && this.instance.onMouseleave(this.theme);
  }

  onMouseup(): void {
    this.instance && this.instance.onMouseup(this.theme);
  }
}
