import Context from './Context';
import { Expression } from './Expression';

abstract class CommandExpression implements Expression {
  protected _isRunnable = false;

  get isRunnable() {
    return this._isRunnable;
  }

  abstract parse(context: Context): void;
  abstract run(): void;
}

export default CommandExpression;
