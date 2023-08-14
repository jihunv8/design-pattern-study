import Memory from './Memory';
import UnitModel from './UnitModel';

class Unit {
  private unitModel: UnitModel;
  private _weapon: string;
  private _skill: string = '';

  constructor(unitModel: UnitModel) {
    this.unitModel = unitModel;
    this._weapon = unitModel.defaultWeapon;

    Memory.getMemory().add(10);
  }

  get weapon() {
    return this._weapon;
  }

  set weapon(newWeapon: string) {
    this._weapon = newWeapon;
  }

  get skill() {
    return this._skill;
  }

  set skill(newSkill: string) {
    this._skill = newSkill;
  }

  get name() {
    return this.unitModel.name;
  }
  get hitpoint() {
    return this.unitModel.hitpoint;
  }
  get speed() {
    return this.unitModel.speed;
  }
}

export default Unit;
