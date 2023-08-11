export abstract class Component {
  protected compType: string;

  constructor(compType: string) {
    this.compType = compType;
  }

  getCompName() {
    console.log(this.compType);
  }
}

export class Button extends Component {
  constructor() {
    super('버튼');
  }
}

export class Switch extends Component {
  constructor() {
    super('스위치');
  }
}

export class Dropdown extends Component {
  constructor() {
    super('드롭다운');
  }
}

export class ButtonOnDarkMode extends Component {
  constructor() {
    super('다크모드 버튼');
  }
}

export class SwitchOnDarkMode extends Component {
  constructor() {
    super('다크모드 스위치');
  }
}

export class DropdownOnDarkMode extends Component {
  constructor() {
    super('다크모드 드롭다운');
  }
}
