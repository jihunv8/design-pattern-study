import MorseCode from './MorseCode';

class PrintMorseCode extends MorseCode {
  j() {
    return this.dot() + this.dash() + this.dash() + this.dash();
  }

  h() {
    return this.dot() + this.dot() + this.dot() + this.dot();
  }
}

export default PrintMorseCode;
