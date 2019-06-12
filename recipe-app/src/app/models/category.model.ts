export class Category {
  static readonly AMERICAN = new Category(1, 'American');
  static readonly ITALIAN = new Category(2, 'Italian');
  static readonly MEXICAN = new Category(3, 'Mexican');
  static readonly FASTFOOD = new Category(4, 'Fast Food');

  // private to disallow creating other instances of this type
  private constructor(private id: number, private description: string) {}

  static get categories() {
    return [Category.AMERICAN, Category.ITALIAN, Category.MEXICAN, Category.FASTFOOD];
  }

  toString() {
    return this.description;
  }
}
