import { Aircon, Light, Speaker, TV } from './HomeAppliance';

class SmartHome {
  readonly aircon = new Aircon('에어컨');
  readonly tv = new TV('TV');
  readonly speaker = new Speaker('스피커');
  readonly light = new Light('조명');

  leaveHome() {
    this.aircon.off();
    this.tv.off();
    this.speaker.off();
    this.light.off();
  }

  arriveHome() {
    this.aircon.on();
    this.tv.on();
    this.speaker.on();
    this.light.on();
  }

  setMode(mode: keyof (typeof Speaker.MODE | typeof TV.MODE)) {
    this.tv.setMode(mode);
    this.speaker.setMode(mode);
  }
}

export default SmartHome;
