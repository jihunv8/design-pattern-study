export interface MorseCodeFunction {
  dot(): string;
  dash(): string;
  space(): string;
}

export class DefaultMorseCodeFunction implements MorseCodeFunction {
  dot(): string {
    return '.';
  }

  dash(): string {
    return '-';
  }

  space(): string {
    return ' ';
  }
}

export class StarMorseCodeFunction implements MorseCodeFunction {
  dot(): string {
    return '*';
  }

  dash(): string {
    return '#';
  }

  space(): string {
    return '=';
  }
}
