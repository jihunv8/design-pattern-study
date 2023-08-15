import { DefaultMorseCodeFunction, StarMorseCodeFunction } from './MorseCodeFunction';
import PrintMorseCode from './PrintMorseCode';

const printMorseCode1 = new PrintMorseCode(new DefaultMorseCodeFunction());
const printMorseCode2 = new PrintMorseCode(new StarMorseCodeFunction());

console.log(printMorseCode1.j() + printMorseCode1.space() + printMorseCode1.h());
console.log(printMorseCode2.j() + printMorseCode2.space() + printMorseCode2.h());
