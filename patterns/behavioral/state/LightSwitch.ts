import { StateOn, type LightState } from './LightState';

class LightSwitch {
  private state: LightState = new StateOn();

  setState(state: LightState) {
    this.state = state;
  }

  onClick() {
    this.state.toggle(this);
  }
}

export default LightSwitch;
