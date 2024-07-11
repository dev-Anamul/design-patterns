import { IFurnitureFactory } from "../abstract-factory/furniture-factory";
import { Chair } from "../abstruct-furniture/chair";
import { CoffeeTable } from "../abstruct-furniture/coffee-table";
import { Sofa } from "../abstruct-furniture/sofa";
import { ModernChair } from "../concreate-furniture/concreate-chair";
import { ModernCoffeeTable } from "../concreate-furniture/concreate-coffee-table";
import { ModernSofa } from "../concreate-furniture/concreate-sofa";

export class ModernFurnitureFactory implements IFurnitureFactory {
  createChair(): Chair {
    return new ModernChair();
  }

  createCoffeeTable(): CoffeeTable {
    return new ModernCoffeeTable();
  }

  createSofa(): Sofa {
    return new ModernSofa();
  }
}
