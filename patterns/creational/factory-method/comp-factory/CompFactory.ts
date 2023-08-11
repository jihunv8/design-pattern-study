import { Button, Switch, type Component, Dropdown } from './Component';

export class CompFactory {
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
