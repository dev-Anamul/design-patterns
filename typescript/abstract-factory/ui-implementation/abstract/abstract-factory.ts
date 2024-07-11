import { Button, Checkbox, Panel } from "./abstract-product";

export interface UIAbstractFactory {
  createButton(): Button;
  createPanel(): Panel;
  createCheckbox(): Checkbox;
}
