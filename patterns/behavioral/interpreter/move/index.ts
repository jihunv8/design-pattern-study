import BeginExpression from './BeginExpression';
import Context from './Context';

const script = 'BEGIN FRONT LOOP 2 BACK RIGHT END LEFT END';
console.log(script);

const context = new Context(script);
const expression = new BeginExpression();

expression.run();

if (expression.parse(context)) {
  console.log(expression.toString());
  expression.run();
}
