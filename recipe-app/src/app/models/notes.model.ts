export class Notes {
  public id?: number;
  public recipeNotes: string;

  public constructor(recipeNotes: string) {
    this.recipeNotes = recipeNotes;
  }
}
