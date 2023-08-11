import { Tank } from './Tank';
import TankFactory from './TankFactory';

const MODEL = TankFactory.Model;
const tankFactory = new TankFactory.Factory();

const tanks: Tank[] = [
  tankFactory.createTank({ name: '셔먼', model: MODEL.SHERMAN }),
  tankFactory.createTank({ name: '점보 셔먼', model: MODEL.SHERMAN, upgrades: { armor: 200 } }),
  tankFactory.createTank({ name: 'T-34', model: MODEL.T34 }),
  tankFactory.createTank({ name: 'T-34 85', model: MODEL.T34, upgrades: { weapon: 200 } }),
  tankFactory.createTank({ name: 'Tiger', model: MODEL.TIGER }),
  tankFactory.createTank({ name: 'Tiger 속도 개선', model: MODEL.TIGER, upgrades: { engine: 20 } }),
];

tanks.forEach((tank) => {
  console.log(tank.name + ' | ' + tank.model);
  console.log('Armor: ' + tank.getArmor());
  console.log('Damage: ' + tank.getDamage());
  console.log('Speed: ' + tank.getSpeed());
  console.log();
});
