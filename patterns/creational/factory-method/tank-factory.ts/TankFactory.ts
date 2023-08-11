import { Sherman, T34, Tank, Tiger } from './Tank';
import { ArmorUpgrade, EngineUpgrade, WeaponUpgrade } from './Upgrade';

namespace TankFactory {
  export enum Model {
    T34,
    SHERMAN,
    TIGER,
  }

  type TankOption = {
    name: string;
    model: Model;
    upgrades?: {
      armor?: number;
      weapon?: number;
      engine?: number;
    };
  };

  export class Factory {
    createTank({ name, model, upgrades }: TankOption) {
      let tank: Tank;

      switch (model) {
        case Model.T34:
          tank = new T34(name);
          break;
        case Model.SHERMAN:
          tank = new Sherman(name);
          break;
        case Model.TIGER:
          tank = new Tiger(name);
          break;
        default:
          throw new Error();
      }

      if (upgrades) {
        const { armor, weapon, engine } = upgrades;
        if (armor) {
          tank = new ArmorUpgrade(tank, armor);
        }

        if (weapon) {
          tank = new WeaponUpgrade(tank, weapon);
        }

        if (engine) {
          tank = new EngineUpgrade(tank, engine);
        }
      }
      return tank;
    }
  }
}

export default TankFactory;
