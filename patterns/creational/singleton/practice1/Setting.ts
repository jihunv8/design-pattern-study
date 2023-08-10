class Setting {
  private _fontSize: number = 16;
  private _color: string = 'white';

  private static setting: Setting;

  private constructor() {}

  static getSetting() {
    if (!this.setting) {
      this.setting = new Setting();
    }
    return this.setting;
  }

  get fontSize() {
    return this._fontSize;
  }

  get color() {
    return this._color;
  }

  setFontSize(size: number) {
    this._fontSize = size;
    return this;
  }

  setColor(color: string) {
    this._color = color;
    return this;
  }
}

export default Setting;
