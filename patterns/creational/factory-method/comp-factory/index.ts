import { CompFactory } from './CompFactory';

const compFactory = new CompFactory();

const buttonComponent = compFactory.createComponent('press');
buttonComponent.getCompName();

const switchComponent = compFactory.createComponent('toggle');
switchComponent.getCompName();

const dropdownComponent = compFactory.createComponent('expand');
dropdownComponent.getCompName();
