import { Command } from './Command';
import SoccerPlayer from './SoccerPlayer';

class Commander {
  private soccerPlayer = new SoccerPlayer();
  private commands: Command[] = [];

  addCommand(command: Command) {
    this.commands.push(command);
  }

  start() {
    this.commands.forEach((command) => {
      command.execute(this.soccerPlayer);
    });
  }
}

export default Commander;
