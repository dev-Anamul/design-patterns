import { Chair } from "../abstruct-furniture/chair";

// This is a concrete class that implements the Chair interface and creates a modern chair.
export class ModernChair implements Chair {
  hasLegs(): void {
    console.log("Modern chair has 4 legs");
  }

  sitOn(): void {
    console.log("Sitting on modern chair");
  }
}

// This is a concrete class that implements the Chair interface and creates a Victorian chair.
export class VictorianChair implements Chair {
  hasLegs(): void {
    console.log("Victorian chair has 4 legs");
  }

  sitOn(): void {
    console.log("Sitting on victorian chair");
  }
}

// This is a concrete class that implements the Chair interface and creates a Art Deco chair.
export class ArtDecoChair implements Chair {
  hasLegs(): void {
    console.log("Art deco chair has 4 legs");
  }

  sitOn(): void {
    console.log("Sitting on art deco chair");
  }
}
