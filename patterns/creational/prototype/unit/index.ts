import Unit from './Unit';

const unit1 = new Unit('마린', 40, 4);
const unit2 = unit1.clone();
const unit3 = unit1.clone();

unit2.damage = 6;
unit3.hitpoint = 30;

console.log(unit1);
console.log(unit2);
console.log(unit3);
