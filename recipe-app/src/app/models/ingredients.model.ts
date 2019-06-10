import { UnitOfMeasure } from './unitOfMeasure.model';

export class Ingredient {
  public id: number;
  public recipId: number;
  public description: string;
  public amount: number;
  public uom: UnitOfMeasure;
}
