export interface SearchStrategy {
  search(keyword: string): void;
}

export class SearchByAll implements SearchStrategy {
  search(keyword: string): void {
    console.log(`전체에서 ${keyword} 찾기`);
  }
}

export class SearchByImage implements SearchStrategy {
  search(keyword: string): void {
    console.log(`이미지에서 ${keyword} 찾기`);
  }
}

export class SearchByNews implements SearchStrategy {
  search(keyword: string): void {
    console.log(`뉴스에서 ${keyword} 찾기`);
  }
}

export class SearchByMap implements SearchStrategy {
  search(keyword: string): void {
    console.log(`지도에서 ${keyword} 찾기`);
  }
}
