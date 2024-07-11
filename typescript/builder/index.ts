import { ConcreteBuilderOne } from "./src/concrete-builder";
import { Director } from "./src/director";

function clientCode(director: Director) {
  const builder = new ConcreteBuilderOne();
  director.setBuilder(builder);

  console.log("Standard basic product:");
  director.buildMinimalViableProduct();
  builder.getResult().listParts();

  console.log("Standard full featured product:");
  director.buildFullFeaturedProduct();
  builder.getResult().listParts();

  console.log("Custom product:");
  builder.producePartA();
  builder.producePartC();
  builder.getResult().listParts();
}

const director = new Director();
clientCode(director);
