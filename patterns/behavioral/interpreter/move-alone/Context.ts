class Context {
  private currentIndex = -1;
  private tokens: string[];

  constructor(script: string) {
    this.tokens = script.split(' ');
  }

  hasNext(): boolean {
    return this.currentIndex < this.tokens.length;
  }

  readNext(): string {
    if (this.hasNext()) {
      this.currentIndex++;
      return this.tokens[this.currentIndex];
    }

    throw new Error('다음 token이 없습니다.');
  }

  getCurrent(): string {
    if (0 <= this.currentIndex && this.currentIndex < this.tokens.length) {
      return this.tokens[this.currentIndex];
    }
    return '';
  }
}

export default Context;
