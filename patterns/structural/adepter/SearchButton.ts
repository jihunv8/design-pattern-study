import { SearchByAll } from './SearchStrategy';
import type { SearchStrategy } from './SearchStrategy';

class SearchButton {
  private _strategy: SearchStrategy = new SearchByAll();

  setStrategy(strategy: SearchStrategy) {
    this._strategy = strategy;
  }

  onClick(e: { keyword: string }) {
    this._strategy.search(e.keyword);
  }
}

export default SearchButton;
