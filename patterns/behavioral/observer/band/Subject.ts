import { Observer } from './Observer';

interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(target: Observer): void;
  notifyObservers(event: string): void;
}

export class Band implements Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(target: Observer): void {
    this.observers = this.observers.filter((observer) => observer !== target);
  }

  notifyObservers(event: string): void {
    this.observers.forEach((observer) => observer.notify(event));
  }

  startConcert(): void {
    this.notifyObservers('START');
  }

  playSong(): void {
    this.notifyObservers('PLAY_SONG');
  }

  endConcert(): void {
    this.notifyObservers('END');
  }
}
