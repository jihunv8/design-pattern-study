import Context from './Context';

export interface Expression {
  readonly isRunnable: boolean;
  parse(context: Context): void;
  run(): void;
}
