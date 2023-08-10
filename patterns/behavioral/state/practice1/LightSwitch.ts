import { LightOff, type LightState } from './LightState';

class LightSwitch {
  private state: LightState = new LightOff();

  setState(state: LightState) {
    this.state = state;
  }

  onSwitch() {
    this.state.toggle(this);
  }
}

export default LightSwitch;
