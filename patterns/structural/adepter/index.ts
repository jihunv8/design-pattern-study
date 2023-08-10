import { FindMovieAlgorithm } from './FindAlgorithm';
import SearchButton from './SearchButton';
import {
  SearchByAlgorithmBaseGlobal,
  SearchByAlgorithmBaseLocal,
  SearchByAll,
  SearchByImage,
  SearchByMap,
  SearchByNews,
} from './SearchStrategy';

const searchButton = new SearchButton();

searchButton.onClick({ keyword: 'hello' });

searchButton.setStrategy(new SearchByImage());
searchButton.onClick({ keyword: '멋진사진' });

searchButton.setStrategy(new SearchByAll());
searchButton.onClick({ keyword: '아무거나' });

searchButton.setStrategy(new SearchByMap());
searchButton.onClick({ keyword: '좋은 장소' });

searchButton.setStrategy(new SearchByNews());
searchButton.onClick({ keyword: 'it' });

searchButton.setStrategy(new SearchByAlgorithmBaseGlobal(new FindMovieAlgorithm()));
searchButton.onClick({ keyword: '어벤져스' });

searchButton.setStrategy(new SearchByAlgorithmBaseLocal(new FindMovieAlgorithm()));
searchButton.onClick({ keyword: '내부자들' });
