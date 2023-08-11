import { XWingFighter } from './Fighter';
import { LaserDecorator, MissileDecorator, PlasmaDecorator } from './FighterDecorator';

const fighter = new XWingFighter();
console.log('기본');
fighter.attack();
console.log('');

const fighterWithMissile = new MissileDecorator(fighter);
console.log('미사일');
fighterWithMissile.attack();
console.log('');

const powerfulFighter = new PlasmaDecorator(new LaserDecorator(fighterWithMissile));
console.log('미사일 레이저 플라즈마');
powerfulFighter.attack();
console.log('');
