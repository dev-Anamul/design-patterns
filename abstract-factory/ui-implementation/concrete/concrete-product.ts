import { Button, Checkbox, Panel } from "../abstract/abstract-product";

export class DarkButton implements Button {
  click(): void {
    console.log("Dark button clicked");
  }
}

export class LightButton implements Button {
  click(): void {
    console.log("Light button clicked");
  }
}

export class DarkPanel implements Panel {
  render(): void {
    console.log("Dark panel rendered");
  }
}

export class LightPanel implements Panel {
  render(): void {
    console.log("Light panel rendered");
  }
}

export class DarkCheckbox implements Checkbox {
  check(): void {
    console.log("Dark checkbox checked");
  }
}

export class LightCheckbox implements Checkbox {
  check(): void {
    console.log("Light checkbox checked");
  }
}
