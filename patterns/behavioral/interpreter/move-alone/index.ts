import ColorLog from '../../../../util/ColorLog';
import BeginExpression from './BeginExpression';
import Context from './Context';

const execute = (script: string) => {
  ColorLog.magenta('execute');
  const context = new Context(script);
  const beginExpression = new BeginExpression();

  beginExpression.parse(context);

  beginExpression.run();
};

[
  'BEGIN FRONT LOOP 2 BACK RIGHT END LEFT END',
  'FRONT LOOP 2 BACK RIGHT END LEFT END',
  'BEGIN FRONT LOOP 2 BACK RIGHT END LEFT',
  'BEGIN FRONT BACK RIGHT LOOP 5 LEFT END END',
  'BEGIN JUMP END',
].forEach((script) => {
  try {
    execute(script);
  } catch (err) {
    if (err instanceof Error) {
      ColorLog.red(err.message);
    }
  }
});
