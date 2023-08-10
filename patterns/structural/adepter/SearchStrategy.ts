import type { FindAlgorithm } from './FindAlgorithm';

export interface SearchStrategy {
  search(keyword: string): void;
}

export class SearchByAll implements SearchStrategy {
  search(keyword: string) {
    console.log(`전체에서 ${keyword} 검색`);
  }
}

export class SearchByImage implements SearchStrategy {
  search(keyword: string) {
    console.log(`이미지에서 ${keyword} 검색`);
  }
}

export class SearchByNews implements SearchStrategy {
  search(keyword: string) {
    console.log(`뉴스에서 ${keyword} 검색`);
  }
}

export class SearchByMap implements SearchStrategy {
  search(keyword: string) {
    console.log(`지도에서 ${keyword} 검색`);
  }
}

//Adapter
export class SearchByAlgorithmBaseGlobal implements SearchStrategy {
  private findAlgorithm: FindAlgorithm;

  constructor(findAlgorithm: FindAlgorithm) {
    this.findAlgorithm = findAlgorithm;
  }

  search(keyword: string): void {
    console.log(`키워드 ${keyword}을`);
    this.findAlgorithm.find(true);
  }
}

//Adapter
export class SearchByAlgorithmBaseLocal implements SearchStrategy {
  private findAlgorithm: FindAlgorithm;

  constructor(findAlgorithm: FindAlgorithm) {
    this.findAlgorithm = findAlgorithm;
  }

  search(keyword: string): void {
    console.log(`${keyword}에 기반하여`);
    this.findAlgorithm.find(true);
  }
}
