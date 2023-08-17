class Context {
  private tokens: string[];
  private currentKeyword: string = '';

  constructor(script: string) {
    this.tokens = script.split(' ');
    this.currentKeyword = this.readNextKeyword();
  }

  readNextKeyword(): string {
    const token = this.tokens.shift();

    if (token !== undefined) {
      this.currentKeyword = token;
    } else {
      this.currentKeyword = '';
    }

    return this.currentKeyword;
  }

  getCurrentKeyword(): string {
    return this.currentKeyword;
  }
}

export default Context;
