import { Cloneable } from './Cloneable';

class Unit implements Cloneable {
  constructor(public name: string, public hitpoint: number, public damage: number) {}

  clone() {
    return { ...this };
  }
}

export default Unit;
