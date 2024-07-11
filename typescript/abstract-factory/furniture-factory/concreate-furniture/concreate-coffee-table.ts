import { CoffeeTable } from "../abstruct-furniture/coffee-table";

// This is a concrete class that implements the CoffeeTable interface and creates a modern coffee table.
export class ModernCoffeeTable implements CoffeeTable {
  hasLegs() {
    console.log("Modern coffee table has 4 legs");
  }
  putCoffee() {
    console.log("Putting coffee on modern coffee table");
  }
}

// This is a concrete class that implements the CoffeeTable interface and creates a Victorian coffee table.
export class VictorianCoffeeTable implements CoffeeTable {
  hasLegs() {
    console.log("Victorian coffee table has 4 legs");
  }
  putCoffee() {
    console.log("Putting coffee on victorian coffee table");
  }
}

// This is a concrete class that implements the CoffeeTable interface and creates a Art Deco coffee table.
export class ArtDecoCoffeeTable implements CoffeeTable {
  hasLegs() {
    console.log("Art deco coffee table has 4 legs");
  }
  putCoffee() {
    console.log("Putting coffee on art deco coffee table");
  }
}
