import { Builder } from "./builder";
import { ProductOne } from "./product";

export class ConcreteBuilderOne implements Builder {
  private product!: ProductOne;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new ProductOne();
  }

  public producePartA(): void {
    this.product.parts.push("PartA1");
  }

  public producePartB(): void {
    this.product.parts.push("PartB1");
  }

  public producePartC(): void {
    this.product.parts.push("PartC1");
  }

  public getResult(): ProductOne {
    const result = this.product;
    this.reset();
    return result;
  }
}
