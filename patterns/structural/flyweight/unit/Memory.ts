class Memory {
  private _amount = 0;

  private constructor() {}

  private static instance: Memory | null;

  static getMemory() {
    if (!this.instance) this.instance = new Memory();
    return this.instance;
  }

  get amount() {
    return this._amount;
  }

  add(num: number) {
    this._amount += num;
  }
}

export default Memory;
