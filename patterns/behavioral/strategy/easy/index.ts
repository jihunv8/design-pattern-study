/* 
  디자인패턴의 폐해중 하나가 쉽게 해결할 수 있는 문제를 디자인패턴을 사용해 꾸역꾸역 구현한 경우이다.
  공부했던 페이지에서 예시로 Strategy패턴은 화살표함수로 쉽게 구현할 수 있다고 봤다. 그 페이지에선 Java기준으로 설명해준 것 같다.
  화살표 함수로 쉽게 구현할 수 있다고 하는 것은 함수형 프로그래밍을 사용해 쉽게 만들 수 있다고 한 것 같다.
  javascript는 기본적으로 함수형 프로그래밍을 사용할 수 있으니 javascript에 맞게 수정해봤다.
*/

import SearchButton from './SearchButton';
import { SearchStrategyAll, SearchStrategyImage, SearchStrategyMap, SearchStrategyNews } from './searchStrategy';

const searchButton = new SearchButton();

searchButton.onClick({ keyword: 'ABC' });

searchButton.setSearchStrategy(SearchStrategyAll);
searchButton.onClick({ keyword: 'ABC' });

searchButton.setSearchStrategy(SearchStrategyImage);
searchButton.onClick({ keyword: 'ABC' });

searchButton.setSearchStrategy(SearchStrategyMap);
searchButton.onClick({ keyword: 'ABC' });

searchButton.setSearchStrategy(SearchStrategyNews);
searchButton.onClick({ keyword: 'ABC' });
