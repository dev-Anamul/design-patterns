export class ProductOne {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Product One parts: ${this.parts.join(", ")}\n`);
  }
}

export class ProductTwo {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Product Two parts: ${this.parts.join(", ")}\n`);
  }
}
