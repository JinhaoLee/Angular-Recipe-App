export class UnitOfMeasure {
  static readonly TEASPOON = new UnitOfMeasure(1, 'Teaspoon');
  static readonly TABLESPOON = new UnitOfMeasure(2, 'Tablespoon');
  static readonly CUP = new UnitOfMeasure(3, 'Cup');
  static readonly PINCH = new UnitOfMeasure(4, 'Pinch');
  static readonly OUNCE = new UnitOfMeasure(5, 'Ounce');
  static readonly EACH = new UnitOfMeasure(6, 'Each');
  static readonly DASH = new UnitOfMeasure(7, 'Dash');
  static readonly PINT = new UnitOfMeasure(8, 'Pint');

  private constructor(private id: number, private description: string) {}

  public static get unitOfMeasures() {
    return [
      UnitOfMeasure.TEASPOON,
      UnitOfMeasure.TABLESPOON,
      UnitOfMeasure.CUP,
      UnitOfMeasure.PINCH,
      UnitOfMeasure.OUNCE,
      UnitOfMeasure.EACH,
      UnitOfMeasure.DASH,
      UnitOfMeasure.PINT
    ];
  }

  public toString() {
    return this.description;
  }
}
