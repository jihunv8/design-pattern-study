import type { Tank } from './Tank';

export abstract class Upgrade implements Tank {
  protected tank: Tank;

  constructor(tank: Tank) {
    this.tank = tank;
  }

  get name(): string {
    return this.tank.name;
  }

  get model(): string {
    return this.tank.model;
  }

  getArmor(): number {
    return this.tank.getArmor();
  }

  getDamage(): number {
    return this.tank.getDamage();
  }

  getSpeed(): number {
    return this.tank.getSpeed();
  }
}

export class ArmorUpgrade extends Upgrade {
  private increase: number;

  constructor(tank: Tank, increase: number) {
    super(tank);
    this.increase = increase;
  }

  getArmor(): number {
    return super.getArmor() + this.increase;
  }

  getSpeed(): number {
    const decrease = Math.floor(this.increase / 10);
    const speed = super.getSpeed() - decrease;

    return speed > 1 ? speed : 1;
  }
}

export class WeaponUpgrade extends Upgrade {
  private damageIncrease: number;

  constructor(tank: Tank, damageIncrease: number) {
    super(tank);
    this.damageIncrease = damageIncrease;
  }

  getDamage(): number {
    return super.getArmor() + this.damageIncrease;
  }

  getSpeed(): number {
    const decrease = Math.floor(this.damageIncrease / 20);
    const speed = super.getSpeed() - decrease;

    return speed > 1 ? speed : 1;
  }
}

export class EngineUpgrade extends Upgrade {
  private speedIncrease: number;

  constructor(tank: Tank, speedIncrease: number) {
    super(tank);
    this.speedIncrease = speedIncrease;
  }

  getSpeed(): number {
    return super.getSpeed() + this.speedIncrease;
  }
}
