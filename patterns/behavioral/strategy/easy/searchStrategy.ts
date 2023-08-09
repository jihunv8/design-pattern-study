export type SearchStrategy = (keyword: string) => void;

export const SearchStrategyAll: SearchStrategy = (keyword: string) => {
  console.log(`Search ${keyword} by All`);
};

export const SearchStrategyImage: SearchStrategy = (keyword: string) => {
  console.log(`Search ${keyword} by Image`);
};

export const SearchStrategyNews: SearchStrategy = (keyword: string) => {
  console.log(`Search ${keyword} by News`);
};

export const SearchStrategyMap: SearchStrategy = (keyword: string) => {
  console.log(`Search ${keyword} by Map`);
};
