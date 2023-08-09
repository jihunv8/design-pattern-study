import { SearchStrategyAll } from './searchStrategy';
import type { SearchStrategy } from './searchStrategy';

class SearchButton {
  private _searchStrategy: SearchStrategy = new SearchStrategyAll();

  setSearchStrategy(searchStrategy: SearchStrategy) {
    this._searchStrategy = searchStrategy;
  }

  onClick(e: { keyword: string }) {
    this._searchStrategy.search(e.keyword);
  }
}

export default SearchButton;
