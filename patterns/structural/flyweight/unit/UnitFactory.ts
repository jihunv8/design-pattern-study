import Unit from './Unit';
import UnitModel from './UnitModel';
import virtualFetch from './VirtualDB';

class UnitFactory {
  private unitModelPool: { [key: string]: UnitModel } = {};

  private constructor() {}

  private static instance: UnitFactory | null;

  static getFactory() {
    if (!this.instance) this.instance = new UnitFactory();
    return this.instance;
  }

  createUnit(key: string) {
    let unitModel = this.unitModelPool[key];

    if (unitModel === undefined) {
      //데이터 요청
      const data = virtualFetch(key);

      if (data === undefined) throw new Error('404 Not Found');

      const { name, hitpoint, speed, defaultWeapon } = data;

      unitModel = new UnitModel({ name, hitpoint, speed, defaultWeapon });

      this.unitModelPool[key] = unitModel;
    }

    return new Unit(unitModel);
  }
}

export default UnitFactory;
