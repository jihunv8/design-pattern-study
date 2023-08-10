import SearchButton from './SearchButton';
import { SearchByImage, SearchByMap, SearchByNews } from './SearchStrategy';

const searchButton = new SearchButton();

searchButton.onClick({ keyword: '아무거나' });

searchButton.setStrategy(new SearchByNews());
searchButton.onClick({ keyword: '아무' });

searchButton.setStrategy(new SearchByImage());
searchButton.onClick({ keyword: '거나' });

searchButton.setStrategy(new SearchByMap());
searchButton.onClick({ keyword: '무거' });
