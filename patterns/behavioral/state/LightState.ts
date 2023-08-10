import LightSwitch from './LightSwitch';

export interface LightState {
  toggle(lightSwitch: LightSwitch): void;
}

export class StateOn implements LightState {
  toggle(lightSwitch: LightSwitch) {
    lightSwitch.setState(new StateOff());

    console.log('전원 OFF');
  }
}

export class StateOff implements LightState {
  toggle(lightSwitch: LightSwitch) {
    lightSwitch.setState(new StateOn());

    console.log('전원 On');
  }
}
