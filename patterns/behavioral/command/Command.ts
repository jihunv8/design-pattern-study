import Robot from './Robot';

export interface Command {
  excute(robot: Robot): void;
}

export class MoveForward implements Command {
  private distance: number;

  constructor(distance: number) {
    this.distance = distance;
  }

  excute(robot: Robot): void {
    robot.moveForward(this.distance);
  }
}

export class Turn implements Command {
  private direction: 'left' | 'right';

  constructor(direction: 'left' | 'right') {
    this.direction = direction;
  }

  excute(robot: Robot): void {
    robot.turn(this.direction);
  }
}

export class Pickup implements Command {
  excute(robot: Robot): void {
    robot.pickup();
  }
}
