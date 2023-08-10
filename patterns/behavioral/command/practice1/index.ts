import { Move, Shot, Skill } from './Command';
import Commander from './Commander';

const commander = new Commander();

commander.addCommand(new Move(1));
commander.addCommand(new Move(1));
commander.addCommand(new Skill('stepOver'));
commander.addCommand(new Move(3));
commander.addCommand(new Move(4));
commander.addCommand(new Skill('marsille'));
commander.addCommand(new Move(2));
commander.addCommand(new Shot('driven'));
commander.addCommand(new Shot('winding'));
commander.addCommand(new Shot('shot'));

commander.start();
