abstract class HomeAppliance {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  on() {
    console.log(`${this.name} 전원 on`);
  }

  off() {
    console.log(`${this.name} 전원 off`);
  }
}

export class TV extends HomeAppliance {
  static readonly MODE = {
    MOVIE: '영화',
    COMMON: '일반',
  } as const;

  constructor(name: string) {
    super(name);
    this.name = name;
  }

  setMode(mode: keyof typeof TV.MODE) {
    console.log(`${this.name} ${Speaker.MODE[mode]}모드로 설정`);
  }
}

export class Aircon extends HomeAppliance {
  constructor(name: string) {
    super(name);
  }
}

export class Light extends HomeAppliance {
  constructor(name: string) {
    super(name);
  }
}

export class Speaker extends HomeAppliance {
  static readonly MODE = {
    MOVIE: '영화',
    COMMON: '일반',
    MUSIC: '음악',
  } as const;

  constructor(name: string) {
    super(name);
    this.name = name;
  }

  setMode(mode: keyof typeof TV.MODE) {
    console.log(`${this.name} ${Speaker.MODE[mode]}모드로 설정`);
  }

  setVolume(value: number) {
    console.log(`볼륨 ${value}(으)로 설정`);
  }
}
