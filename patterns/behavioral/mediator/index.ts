import { DataDownloader, GalleryView, ListView } from './ModeListener';
import ModeMediator from './ModeMediator';
import ModeSwitch from './ModeSwitch';

const modeSwitch = new ModeSwitch.Constructor();
const modeMediator = new ModeMediator();

modeMediator.addListener(new ListView());
modeMediator.addListener(new GalleryView());
modeMediator.addListener(new DataDownloader());

modeSwitch.setModeMediator(modeMediator);

modeSwitch.toggleMode();
modeSwitch.toggleMode();
