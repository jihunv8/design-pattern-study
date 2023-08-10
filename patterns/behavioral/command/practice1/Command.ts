import SoccerPlayer from './SoccerPlayer';

export interface Command {
  execute(soccerPlayer: SoccerPlayer): void;
}

export class Shot implements Command {
  private shotType: keyof typeof SoccerPlayer.shotType;
  constructor(shotType: keyof typeof SoccerPlayer.shotType) {
    this.shotType = shotType;
  }

  execute(soccerPlayer: SoccerPlayer): void {
    soccerPlayer.shot(this.shotType);
  }
}

export class Skill implements Command {
  private skillType: keyof typeof SoccerPlayer.skillType;
  constructor(skillType: keyof typeof SoccerPlayer.skillType) {
    this.skillType = skillType;
  }

  execute(soccerPlayer: SoccerPlayer): void {
    soccerPlayer.useSkill(this.skillType);
  }
}

export class Move implements Command {
  private distance: number;
  constructor(distance: number) {
    this.distance = distance;
  }

  execute(soccerPlayer: SoccerPlayer): void {
    soccerPlayer.move(this.distance);
  }
}
