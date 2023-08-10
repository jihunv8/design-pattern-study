import { SearchByAll, SearchStrategy } from './SearchStrategy';

class SearchButton {
  private strategy: SearchStrategy = new SearchByAll();

  setStrategy(strategy: SearchStrategy) {
    this.strategy = strategy;
  }

  onClick(e: { keyword: string }) {
    this.strategy.search(e.keyword);
  }
}

export default SearchButton;
