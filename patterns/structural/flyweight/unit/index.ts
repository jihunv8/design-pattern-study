import Memory from './Memory';
import UnitFactory from './UnitFactory';

const unitFactory = UnitFactory.getFactory();

const customRifleman = unitFactory.createUnit('rifleman');
customRifleman.weapon = 'BAR';
customRifleman.skill = 'sprint';

const units = [
  unitFactory.createUnit('rifleman'),
  unitFactory.createUnit('rifleman'),
  unitFactory.createUnit('tomy'),
  unitFactory.createUnit('grenadier'),
  unitFactory.createUnit('sherman'),
  customRifleman,
];

units.forEach((unit) => {
  console.log();
  console.log('name: ' + unit.name + '--------');
  console.log('hitpoint: ' + unit.hitpoint);
  console.log('speed: ' + unit.speed);
  console.log('skill: ' + unit.skill);
  console.log('weapon: ' + unit.weapon);
});

console.log('memory: ', Memory.getMemory().amount);
