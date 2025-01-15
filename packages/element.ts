export class UiElement {
  private body: HTMLElement | null = null;
  private doc: Document | null = null;
  setBody(v: HTMLElement) {
    this.body = v;
  }
  setDoc(v: Document) {
    this.doc = v;
  }
  getDoc(): Document {
    return this.doc || document;
  }
  getBobdy(): HTMLElement {
    return this.body || document.body;
  }
}
export const uiElement = new UiElement();
