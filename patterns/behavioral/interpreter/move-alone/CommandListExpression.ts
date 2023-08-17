import ActionCommandExpression from './ActionCommandExpression';
import CommandExpression from './CommandExpression';
import Context from './Context';
import { Expression } from './Expression';
import LoopCommandExpression from './LoopCommandExpression';

class CommandListExpression implements Expression {
  private _isRunnable = false;
  private commands: CommandExpression[] = [];

  get isRunnable() {
    return this._isRunnable;
  }

  parse(context: Context): void {
    if (!context.hasNext()) throw new Error('다음 token이 없습니다.');

    let token = context.readNext();
    while (token !== 'END') {
      let command: CommandExpression | null = null;

      if (LoopCommandExpression.checkValidToken(token)) {
        command = new LoopCommandExpression();
      } else if (ActionCommandExpression.checkVaildToken(token)) {
        command = new ActionCommandExpression(token);
      } else {
        throw new Error(`${token}은{는} 해석할 수 없는 token입니다.`);
      }

      command.parse(context);

      this.commands.push(command);

      if (!context.hasNext()) throw new Error('다음 token이 없습니다.');

      token = context.readNext();
    }

    this._isRunnable = true;
  }

  run(): void {
    if (!this.isRunnable) throw new Error('Command List 실행할 수 없음');

    for (const command of this.commands) {
      command.run();
    }
  }
}

export default CommandListExpression;
