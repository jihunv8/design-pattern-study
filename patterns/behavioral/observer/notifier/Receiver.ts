import Notifier, { NotifyType } from './Notifier';

export interface Receiver {
  onNotify(notifyType: NotifyType): void;
}

export class FireStation implements Receiver {
  constructor(public name: string, public numOfFireFighter: number, public numOfFireTruck: number) {}

  onNotify(notifyType: NotifyType): void {
    if (notifyType !== NotifyType.FIRE) return;
    console.log(`${this.name}소방서에서 ${this.numOfFireFighter}명과 ${this.numOfFireTruck}대 소방차 출동`);
  }
}

export class PoliceStation implements Receiver {
  constructor(public name: string, public numOfPolice: number, public numOfCar: number) {}

  onNotify(notifyType: NotifyType): void {
    if (notifyType !== NotifyType.MURDER) return;
    console.log(`${this.name}경찰서에서 ${this.numOfPolice}명과 ${this.numOfCar}대 경찰차 출동`);
  }
}
