import { DarkCompFactory, LightCompFactory } from './CompFactory';

const lightCompFactory = new LightCompFactory();

const buttonComponent = lightCompFactory.createComponent('press');
buttonComponent.getCompName();

const switchComponent = lightCompFactory.createComponent('toggle');
switchComponent.getCompName();

const dropdownComponent = lightCompFactory.createComponent('expand');
dropdownComponent.getCompName();

const darkCompFactory = new DarkCompFactory();

const darkButtonComponent = darkCompFactory.createComponent('press');
darkButtonComponent.getCompName();

const darkSwitchComponent = darkCompFactory.createComponent('toggle');
darkSwitchComponent.getCompName();

const darkDropdownComponent = darkCompFactory.createComponent('expand');
darkDropdownComponent.getCompName();
