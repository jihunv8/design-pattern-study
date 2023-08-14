export interface Observer {
  notify(event: string): void;
}

export class Fan implements Observer {
  notify(event: string): void {
    switch (event) {
      case 'START':
        console.log('YAY!');
        break;
      case 'END':
        console.log('THANKS! BYE!');
        break;
    }
  }
}

export class Security implements Observer {
  notify(event: string): void {
    switch (event) {
      case 'START':
        console.log('DOOR IS CLOSED');
        break;
      case 'END':
        console.log('DOOR IS OPEN');
        break;
    }
  }
}

export class Lights implements Observer {
  notify(event: string): void {
    switch (event) {
      case 'PLAY_SONG':
        console.log('☆ ★ ☆');
        break;
    }
  }
}
