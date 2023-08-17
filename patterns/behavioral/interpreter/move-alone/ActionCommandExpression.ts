import CommandExpression from './CommandExpression';
import Context from './Context';

class ActionCommandExpression extends CommandExpression {
  token: string;

  constructor(token: string) {
    super();
    this.token = token;
  }

  static checkVaildToken(token: string) {
    return ['FRONT', 'BACK', 'LEFT', 'RIGHT'].includes(token);
  }

  parse(context: Context): void {
    const currentToken = context.getCurrent();

    if (!ActionCommandExpression.checkVaildToken(currentToken)) {
      throw new Error(`${currentToken}은(는) Action token이 아닙니다.`);
    }

    this._isRunnable = true;
  }

  run(): void {
    if (!this.isRunnable) throw new Error('Action 실행할 수 없음');

    console.log(`move ${this.token}`);
  }
}

export default ActionCommandExpression;
