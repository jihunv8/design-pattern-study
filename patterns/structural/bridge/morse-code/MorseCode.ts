import { MorseCodeFunction } from './MorseCodeFunction';

abstract class MorseCode {
  constructor(private morseCodeFunction: MorseCodeFunction) {}

  dot() {
    return this.morseCodeFunction.dot();
  }

  dash() {
    return this.morseCodeFunction.dash();
  }

  space() {
    return this.morseCodeFunction.space();
  }
}

export default MorseCode;
