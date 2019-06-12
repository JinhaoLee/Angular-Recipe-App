export class Difficulty {
  static readonly EASY = new Difficulty('EASY');
  static readonly MODERATE = new Difficulty('MODERATE');
  static readonly KIND_OF_HARD = new Difficulty('KIND_OF_HARD');
  static readonly HARD = new Difficulty('HARD');

  private constructor(private difficulty: string) {}

  public get value() {
    return this.difficulty;
  }

  public static get difficulties() {
    return [Difficulty.EASY, Difficulty.MODERATE, Difficulty.KIND_OF_HARD, Difficulty.HARD];
  }

  public toString() {
    return this.value;
  }
}
