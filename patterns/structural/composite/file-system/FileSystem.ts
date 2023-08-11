interface MyFileSystem {
  getSize(): number;
  remove(): void;
}

export class MyFile implements MyFileSystem {
  private name: string;
  private size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  getSize(): number {
    return this.size;
  }

  remove(): void {
    console.log(this.name + '삭제');
  }
}

export class MyFolder implements MyFileSystem {
  private name: string;
  private elements: MyFileSystem[] = [];

  constructor(name: string) {
    this.name = name;
  }

  add(element: MyFileSystem) {
    this.elements.push(element);
  }

  getSize(): number {
    return this.elements.reduce((sumOfSize, element) => sumOfSize + element.getSize(), 0);
  }

  remove(): void {
    this.elements.forEach((element) => element.remove());
    console.log('폴더' + this.name + '삭제');
  }
}
