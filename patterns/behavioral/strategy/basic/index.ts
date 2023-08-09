import SearchButton from './SearchButton';
import { SearchStrategyAll, SearchStrategyImage, SearchStrategyMap, SearchStrategyNews } from './searchStrategy';

const searchButton = new SearchButton();

const searchStrategyAll = new SearchStrategyAll();
const searchStrategyImage = new SearchStrategyImage();
const searchStrategyNews = new SearchStrategyNews();
const searchStrategyMap = new SearchStrategyMap();

searchButton.onClick({ keyword: 'ABC' });

searchButton.setSearchStrategy(searchStrategyMap);
searchButton.onClick({ keyword: 'ABC' });

searchButton.setSearchStrategy(searchStrategyImage);
searchButton.onClick({ keyword: 'ABC' });

searchButton.setSearchStrategy(searchStrategyNews);
searchButton.onClick({ keyword: 'ABC' });

searchButton.setSearchStrategy(searchStrategyAll);
searchButton.onClick({ keyword: 'ABC' });
