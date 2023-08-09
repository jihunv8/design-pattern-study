export interface SearchStrategy {
  search: (keyword: string) => void;
}

export class SearchStrategyAll implements SearchStrategy {
  search(keyword: string) {
    console.log(`Search ${keyword} by All`);
  }
}

export class SearchStrategyImage implements SearchStrategy {
  search(keyword: string) {
    console.log(`Search ${keyword} by Image`);
  }
}

export class SearchStrategyNews implements SearchStrategy {
  search(keyword: string) {
    console.log(`Search ${keyword} by News`);
  }
}

export class SearchStrategyMap implements SearchStrategy {
  search(keyword: string) {
    console.log(`Search ${keyword} by Map`);
  }
}
