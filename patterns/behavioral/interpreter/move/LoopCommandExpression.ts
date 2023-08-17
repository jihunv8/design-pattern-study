import CommandExpression from './CommandExpression';
import CommandListExpression from './CommandListExpression';
import Context from './Context';

class LoopCommandExpression extends CommandExpression {
  count: number = -1;
  expression: CommandListExpression | null = null;

  constructor(keyword: string) {
    super(keyword);
  }

  static checkValidKeyword(keyword: string): boolean {
    return keyword === 'LOOP';
  }

  parse(context: Context): boolean {
    if (!LoopCommandExpression.checkValidKeyword(this.keyword)) return false;

    const countKeyword = context.readNextKeyword();
    if (countKeyword === '') return false;

    this.count = Number(countKeyword);

    if (Number.isNaN(this.count)) return false;

    this.expression = new CommandListExpression();
    if (context.readNextKeyword() === '') return false;
    return this.expression.parse(context);
  }

  run(): boolean {
    for (let i = 0; i < this.count; i++) {
      if (this.expression === null) return false;

      const runnable = this.expression.run();
      if (!runnable) {
        return false;
      }
    }

    return true;
  }

  toString() {
    return `LOOP("${this.count}") ${this.expression}`;
  }
}

export default LoopCommandExpression;
