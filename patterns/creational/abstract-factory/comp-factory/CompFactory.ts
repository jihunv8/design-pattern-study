import {
  Button,
  Switch,
  type Component,
  Dropdown,
  ButtonOnDarkMode,
  SwitchOnDarkMode,
  DropdownOnDarkMode,
} from './Component';

interface CompFactory {
  createComponent(usage: 'press' | 'toggle' | 'expand'): Component;
}

export class LightCompFactory implements CompFactory {
  createComponent(usage: 'press' | 'toggle' | 'expand'): Component {
    switch (usage) {
      case 'press':
        return new Button();

      case 'toggle':
        return new Switch();

      default:
        return new Dropdown();
    }
  }
}

export class DarkCompFactory implements CompFactory {
  createComponent(usage: 'press' | 'toggle' | 'expand'): Component {
    switch (usage) {
      case 'press':
        return new ButtonOnDarkMode();

      case 'toggle':
        return new SwitchOnDarkMode();

      default:
        return new DropdownOnDarkMode();
    }
  }
}
