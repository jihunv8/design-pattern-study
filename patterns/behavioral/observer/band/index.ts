import { Fan, Lights, Security } from './Observer';
import { Band } from './Subject';

const band = new Band();

const fanThatWillRemoved = new Fan();
band.addObserver(fanThatWillRemoved);
band.addObserver(new Fan());
band.addObserver(new Fan());
band.addObserver(new Fan());
band.addObserver(new Lights());
band.addObserver(new Security());

band.removeObserver(fanThatWillRemoved);

band.startConcert();
band.playSong();
band.endConcert();
