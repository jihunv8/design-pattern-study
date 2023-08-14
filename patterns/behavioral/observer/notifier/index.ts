import Notifier, { NotifyType } from './Notifier';
import { FireStation, PoliceStation } from './Receiver';

const notifier = new Notifier();

notifier.subscribe(new FireStation('예산', 5, 2));
notifier.subscribe(new FireStation('덕산', 3, 1));
notifier.subscribe(new FireStation('서울', 20, 10));

notifier.subscribe(new PoliceStation('예산', 8, 2));
notifier.subscribe(new PoliceStation('내포', 6, 4));
notifier.subscribe(new PoliceStation('송파', 30, 12));

notifier.notify(NotifyType.FIRE);
notifier.notify(NotifyType.MURDER);
