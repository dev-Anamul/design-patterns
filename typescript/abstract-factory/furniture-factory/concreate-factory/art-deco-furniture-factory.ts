import { IFurnitureFactory } from "../abstract-factory/furniture-factory";
import { Chair } from "../abstruct-furniture/chair";
import { CoffeeTable } from "../abstruct-furniture/coffee-table";
import { Sofa } from "../abstruct-furniture/sofa";
import { ArtDecoChair } from "../concreate-furniture/concreate-chair";
import { ArtDecoCoffeeTable } from "../concreate-furniture/concreate-coffee-table";
import { ArtDecoSofa } from "../concreate-furniture/concreate-sofa";

export class ArtDecoFurnitureFactory implements IFurnitureFactory {
  createChair(): Chair {
    return new ArtDecoChair();
  }

  createCoffeeTable(): CoffeeTable {
    return new ArtDecoCoffeeTable();
  }

  createSofa(): Sofa {
    return new ArtDecoSofa();
  }
}
