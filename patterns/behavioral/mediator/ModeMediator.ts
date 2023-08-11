import { ModeListener } from './ModeListener';
import ModeSwitch from './ModeSwitch';

class ModeMediator {
  private listeners: ModeListener[] = [];

  addListener(listener: ModeListener) {
    this.listeners.push(listener);
  }

  onModeChange(mode: ModeSwitch.Mode) {
    this.listeners.forEach((listener) => {
      listener.onModeChange(mode);
    });
  }
}

export default ModeMediator;
