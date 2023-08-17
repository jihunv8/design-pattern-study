import CommandExpression from './CommandExpression';
import CommandListExpression from './CommandListExpression';
import Context from './Context';

class LoopCommandExpression extends CommandExpression {
  private count = -1;
  private expression: CommandListExpression | null = null;

  static checkValidToken(token: string) {
    return token === 'LOOP';
  }

  parse(context: Context): void {
    const currentToken = context.getCurrent();
    if (currentToken !== 'LOOP') throw new Error(`${currentToken}은(는) LOOP가 아닙니다.`);

    if (!context.hasNext()) throw new Error('LOOP다음에는 숫가가 있어야합니다.');

    const tokenOfNum = Number(context.readNext());

    if (Number.isNaN(tokenOfNum)) throw new Error('LOOP다음에는 숫가가 있어야합니다.');

    this.count = tokenOfNum;

    this.expression = new CommandListExpression();
    this.expression.parse(context);
    this._isRunnable = true;
  }

  run(): void {
    if (!this.isRunnable || this.expression === null || this.count < 0) throw new Error('LOOP 실행할 수 없음');

    for (let i = 0; i < this.count; i++) {
      this.expression.run();
    }
  }
}

export default LoopCommandExpression;
