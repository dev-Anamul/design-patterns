import { Chair } from "../abstruct-furniture/chair";
import { CoffeeTable } from "../abstruct-furniture/coffee-table";
import { Sofa } from "../abstruct-furniture/sofa";

export interface IFurnitureFactory {
  createChair(): Chair;
  createCoffeeTable(): CoffeeTable;
  createSofa(): Sofa;
}
