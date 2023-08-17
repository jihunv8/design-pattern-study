import Context from './Context';
import { Expression } from './Expression';

abstract class CommandExpression implements Expression {
  protected keyword: string;

  constructor(keyword: string) {
    this.keyword = keyword;
  }

  abstract parse(context: Context): boolean;
  abstract run(): boolean;
}

export default CommandExpression;
