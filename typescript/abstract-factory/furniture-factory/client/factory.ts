import { Chair } from "../abstruct-furniture/chair";
import { CoffeeTable } from "../abstruct-furniture/coffee-table";
import { Sofa } from "../abstruct-furniture/sofa";
import { IFurnitureFactory } from "../abstract-factory/furniture-factory";

export class FurnitureFactoryClient {
  private chair: Chair;
  private coffeeTable: CoffeeTable;
  private sofa: Sofa;

  constructor(factory: IFurnitureFactory) {
    this.chair = factory.createChair();
    this.coffeeTable = factory.createCoffeeTable();
    this.sofa = factory.createSofa();
  }

  printProducts(): void {
    this.chair.hasLegs();
    this.chair.sitOn();
    this.coffeeTable.hasLegs();
    this.coffeeTable.putCoffee();
    this.sofa.hasLegs();
    this.sofa.sitOn();
  }
}
