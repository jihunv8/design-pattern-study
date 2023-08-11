import { Fighter } from './Fighter';

abstract class FighterDecorator implements Fighter {
  private fighter: Fighter;
  constructor(fighter: Fighter) {
    this.fighter = fighter;
  }

  attack() {
    this.fighter.attack();
  }
}

export class LaserDecorator extends FighterDecorator {
  attack() {
    super.attack();
    console.log('레이저 발사');
  }
}

export class PlasmaDecorator extends FighterDecorator {
  attack() {
    super.attack();
    console.log('플라즈마 발사');
  }
}

export class MissileDecorator extends FighterDecorator {
  attack() {
    super.attack();
    console.log('미사일 발사');
  }
}
