export interface Fighter {
  attack(): void;
}

export class XWingFighter implements Fighter {
  attack(): void {
    console.log('탄환 발사');
  }
}
