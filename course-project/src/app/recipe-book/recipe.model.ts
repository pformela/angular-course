import { Ingredient } from '../shared/ingredient.model';
import { v4 as uuidv4 } from 'uuid';

export class Recipe {
  public id: string = uuidv4();

  public constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public ingredients: Ingredient[] = []
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
