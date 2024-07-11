import { Sofa } from "../abstruct-furniture/sofa";

// This is a concrete class that implements the Sofa interface and creates a modern sofa.
export class ModernSofa implements Sofa {
  hasLegs(): void {
    console.log("Modern sofa has 4 legs");
  }

  sitOn(): void {
    console.log("Sitting on modern sofa");
  }
}

// This is a concrete class that implements the Sofa interface and creates a Victorian sofa.
export class VictorianSofa implements Sofa {
  hasLegs(): void {
    console.log("Victorian sofa has 4 legs");
  }

  sitOn(): void {
    console.log("Sitting on victorian sofa");
  }
}

// This is a concrete class that implements the Sofa interface and creates a Art Deco sofa.
export class ArtDecoSofa implements Sofa {
  hasLegs(): void {
    console.log("Art deco sofa has 4 legs");
  }

  sitOn(): void {
    console.log("Sitting on art deco sofa");
  }
}
