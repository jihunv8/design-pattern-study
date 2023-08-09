class Setting {
  private static setting: Setting | null = null;

  static getSetting(): Setting {
    if (Setting.setting === null) {
      Setting.setting = new Setting();
    }

    return Setting.setting;
  }

  private _fontSize: number = 16;
  private _isDarkMode: boolean = false;

  private constructor() {}

  getFontSize() {
    return this._fontSize;
  }

  setFontSize(size: number) {
    this._fontSize = size;
    return this;
  }

  getIsDarkMode() {
    return this._isDarkMode;
  }

  setIsDarkMode(state: boolean) {
    this._isDarkMode = state;
    return this;
  }
}

export default Setting;
