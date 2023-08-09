import { SearchStrategyAll } from './searchStrategy';
import type { SearchStrategy } from './searchStrategy';

class SearchButton {
  private _searchStrategy: SearchStrategy = SearchStrategyAll;

  setSearchStrategy(searchStrategy: SearchStrategy) {
    this._searchStrategy = searchStrategy;
  }

  onClick(e: { keyword: string }) {
    this._searchStrategy(e.keyword);
  }
}

export default SearchButton;
