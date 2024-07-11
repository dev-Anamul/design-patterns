import { FurnitureFactoryClient } from "./furniture-factory/client/factory";
import { ArtDecoFurnitureFactory } from "./furniture-factory/concreate-factory/art-deco-furniture-factory";
import { ModernFurnitureFactory } from "./furniture-factory/concreate-factory/modern-furniture-factory";
import { VictorianFurnitureFactory } from "./furniture-factory/concreate-factory/victorian-furniture-factor";
import { UIAbstractFactory } from "./ui-implementation/abstract/abstract-factory";
import {
  DarkFactory,
  LightFactory,
} from "./ui-implementation/concrete/concrete-factory";

// // UI Abstract Factory implementation
// // Dark theme
// const darkFactory: UIAbstractFactory = new DarkFactory();
// const darkButton = darkFactory.createButton();
// const darkPanel = darkFactory.createPanel();
// const darkCheckbox = darkFactory.createCheckbox();
// darkButton.click();
// darkPanel.render();
// darkCheckbox.check();

// // light theme
// const lightFactory: UIAbstractFactory = new LightFactory();
// const lightButton = lightFactory.createButton();
// const lightPanel = lightFactory.createPanel();
// const lightCheckbox = lightFactory.createCheckbox();
// lightButton.click();
// lightPanel.render();
// lightCheckbox.check();

// furniture factory implementation
const furnitureFactory = new FurnitureFactoryClient(
  new ModernFurnitureFactory()
);
console.log("Modern Furniture Factory");
furnitureFactory.printProducts();
console.log("\n");

const furnitureFactory2 = new FurnitureFactoryClient(
  new VictorianFurnitureFactory()
);
console.log("Victorian Furniture Factory");
furnitureFactory2.printProducts();
console.log("\n");

const furnitureFactory3 = new FurnitureFactoryClient(
  new ArtDecoFurnitureFactory()
);
console.log("Art Deco Furniture Factory");
furnitureFactory3.printProducts();
console.log("\n");
