import { IFurnitureFactory } from "../abstract-factory/furniture-factory";
import { Chair } from "../abstruct-furniture/chair";
import { CoffeeTable } from "../abstruct-furniture/coffee-table";
import { Sofa } from "../abstruct-furniture/sofa";
import { VictorianChair } from "../concreate-furniture/concreate-chair";
import { VictorianCoffeeTable } from "../concreate-furniture/concreate-coffee-table";
import { VictorianSofa } from "../concreate-furniture/concreate-sofa";

export class VictorianFurnitureFactory implements IFurnitureFactory {
  createChair(): Chair {
    return new VictorianChair();
  }

  createCoffeeTable(): CoffeeTable {
    return new VictorianCoffeeTable();
  }

  createSofa(): Sofa {
    return new VictorianSofa();
  }
}
