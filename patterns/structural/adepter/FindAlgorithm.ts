export interface FindAlgorithm {
  find(global: boolean): void;
}

export class FindMovieAlgorithm implements FindAlgorithm {
  find(global: boolean) {
    console.log(`알고리즘으로 ${global ? '모든' : '한국'} 영화 찾기`);
  }
}
