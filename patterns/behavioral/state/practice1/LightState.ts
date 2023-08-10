import LightSwitch from './LightSwitch';

export interface LightState {
  toggle(lightSwitch: LightSwitch): void;
}

export class LightOn implements LightState {
  toggle(lightSwitch: LightSwitch) {
    console.log('On -> Off');

    lightSwitch.setState(new LightOff());
  }
}

export class LightOff implements LightState {
  toggle(lightSwitch: LightSwitch) {
    console.log('Off -> On');

    lightSwitch.setState(new LightOn());
  }
}
