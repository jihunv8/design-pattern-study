import { type Receiver } from './Receiver';

export enum NotifyType {
  FIRE,
  MURDER,
}

class Notifier {
  private receivers: Receiver[] = [];

  subscribe(receiver: Receiver) {
    this.receivers.push(receiver);
  }

  unsubscribe(target: Receiver) {
    this.receivers.filter((receiver) => receiver !== target);
  }

  notify(notifyType: NotifyType) {
    this.receivers.forEach((receiver) => receiver.onNotify(notifyType));
  }
}

export default Notifier;
