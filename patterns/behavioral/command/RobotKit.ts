import type { Command } from './Command';
import Robot from './Robot';

class RobotKit {
  private robot = new Robot();
  private commands: Command[] = [];

  addCommand(command: Command) {
    this.commands.push(command);
  }

  start() {
    this.commands.forEach((command) => {
      command.excute(this.robot);
    });
  }
}

export default RobotKit;
