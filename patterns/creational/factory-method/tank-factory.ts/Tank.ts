export interface Tank {
  readonly name: string;
  readonly model: string;
  getArmor(): number;
  getDamage(): number;
  getSpeed(): number;
}

export class T34 implements Tank {
  private _name: string;
  readonly model = 'T-34';
  private armor = 200;
  private damage = 100;
  private speed = 50;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  getArmor(): number {
    return this.armor;
  }

  getDamage(): number {
    return this.damage;
  }

  getSpeed(): number {
    return this.speed;
  }
}

export class Sherman implements Tank {
  private _name: string;
  readonly model = 'Sherman';
  private armor = 200;
  private damage = 120;
  private speed = 40;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  getArmor(): number {
    return this.armor;
  }

  getDamage(): number {
    return this.damage;
  }

  getSpeed(): number {
    return this.speed;
  }
}

export class Tiger implements Tank {
  private _name: string;
  readonly model = 'Tiger';
  private armor = 300;
  private damage = 200;
  private speed = 15;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  getArmor(): number {
    return this.armor;
  }

  getDamage(): number {
    return this.damage;
  }

  getSpeed(): number {
    return this.speed;
  }
}
