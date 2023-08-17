import ActionCommandExpression from './ActionCommandExpression';
import CommandExpression from './CommandExpression';
import Context from './Context';
import { Expression } from './Expression';
import LoopCommandExpression from './LoopCommandExpression';

class CommandListExpression implements Expression {
  private commands: CommandExpression[] = [];

  parse(context: Context): boolean {
    while (true) {
      const currentKeyword = context.getCurrentKeyword();

      if (currentKeyword === '') return false;

      if (currentKeyword === 'END') {
        context.readNextKeyword();
        break;
      }

      let command: CommandExpression | null = null;

      if (LoopCommandExpression.checkValidKeyword(currentKeyword)) {
        command = new LoopCommandExpression(currentKeyword);
      } else if (ActionCommandExpression.checkValidKeyword(currentKeyword)) {
        command = new ActionCommandExpression(currentKeyword);
      }

      if (command === null) return false;

      if (command.parse(context)) {
        this.commands.push(command);
        continue;
      }

      return false;
    }

    return true;
  }

  run(): boolean {
    for (const command of this.commands) {
      const runnable = command.run();
      if (!runnable) return false;
    }

    return true;
  }

  toString() {
    return `[${this.commands.toString()}]`;
  }
}

export default CommandListExpression;
