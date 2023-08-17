import CommandListExpression from './CommandListExpression';
import Context from './Context';
import { Expression } from './Expression';

class BeginExpression implements Expression {
  private expression: CommandListExpression | null = null;

  static checkValidKeyword(keyword: string): boolean {
    return keyword === 'BEGIN';
  }

  parse(context: Context): boolean {
    if (!BeginExpression.checkValidKeyword(context.getCurrentKeyword())) {
      return false;
    }

    context.readNextKeyword();
    this.expression = new CommandListExpression();
    return this.expression.parse(context);
  }

  run(): boolean {
    if (this.expression !== null) {
      return this.expression.run();
    }

    return false;
  }

  toString(): string {
    return 'BEGIN' + this.expression;
  }
}

export default BeginExpression;
