import CommandListExpression from './CommandListExpression';
import Context from './Context';
import { Expression } from './Expression';

class BeginExpression implements Expression {
  private expression: CommandListExpression | null = null;
  private _isRunnable = false;

  get isRunnable() {
    return this._isRunnable;
  }

  parse(context: Context): void {
    if (!context.hasNext()) throw new Error('다음 token이 없습니다.');

    const token = context.readNext();

    if (token !== 'BEGIN') {
      throw new Error(`'${token}'은(는) 'BEGIN'이 아닙니다.`);
    }

    this._isRunnable = true;
    this.expression = new CommandListExpression();
    this.expression.parse(context);
  }

  run(): void {
    if (!this.isRunnable) throw new Error('BEGIN 실행할 수 없음');

    if (this.expression === null) throw new Error('BeginExpression의 expression이 없습니다.');

    this.expression.run();
  }
}

export default BeginExpression;
