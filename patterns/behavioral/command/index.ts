import { MoveForward, Pickup, Turn } from './Command';
import RobotKit from './RobotKit';

const robotKit = new RobotKit();

robotKit.addCommand(new MoveForward(2));
robotKit.addCommand(new MoveForward(3));
robotKit.addCommand(new Turn('left'));
robotKit.addCommand(new Pickup());
robotKit.addCommand(new Turn('left'));
robotKit.addCommand(new Turn('right'));
robotKit.addCommand(new Pickup());
robotKit.addCommand(new MoveForward(3));

robotKit.start();
