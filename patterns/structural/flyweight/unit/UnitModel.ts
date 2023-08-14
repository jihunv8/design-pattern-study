import Memory from './Memory';

interface UnitModelProps {
  name: string;
  hitpoint: number;
  speed: number;
  defaultWeapon: string;
}

class UnitModel {
  readonly name: string;
  readonly hitpoint: number;
  readonly speed: number;
  readonly defaultWeapon: string;

  constructor({ name, hitpoint, speed, defaultWeapon }: UnitModelProps) {
    this.name = name;
    this.hitpoint = hitpoint;
    this.speed = speed;
    this.defaultWeapon = defaultWeapon;

    Memory.getMemory().add(20);
  }
}

export default UnitModel;
