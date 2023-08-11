import ModeMediator from './ModeMediator';

namespace ModeSwitch {
  export enum Mode {
    LIST,
    GALLERY,
  }

  export class Constructor {
    private mode = Mode.LIST;
    modeMediator: ModeMediator | null = null;

    setModeMediator(modeMediator: ModeMediator) {
      this.modeMediator = modeMediator;
    }

    toggleMode() {
      this.mode = this.mode === Mode.LIST ? Mode.GALLERY : Mode.LIST;

      if (this.modeMediator) this.modeMediator.onModeChange(this.mode);
    }
  }
}

export default ModeSwitch;
