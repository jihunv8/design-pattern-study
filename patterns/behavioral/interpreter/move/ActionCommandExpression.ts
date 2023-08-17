import CommandExpression from './CommandExpression';
import Context from './Context';

class ActionCommandExpression extends CommandExpression {
  constructor(keyword: string) {
    super(keyword);
  }

  static checkValidKeyword(keyword: string): boolean {
    return ['FRONT', 'BACK', 'LEFT', 'RIGHT'].includes(keyword);
  }

  parse(context: Context): boolean {
    if (!ActionCommandExpression.checkValidKeyword(this.keyword)) return false;

    //이 키워드가 마지막일 경우 false. 마지막 키워드는 END여야하기 때문
    if (context.readNextKeyword() === '') return false;

    return true;
  }

  run(): boolean {
    console.log('cmd: ' + this.keyword);
    return true;
  }

  toString() {
    return this.keyword;
  }
}

export default ActionCommandExpression;
