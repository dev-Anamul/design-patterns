import { UIAbstractFactory } from "../abstract/abstract-factory";
import { Button, Checkbox, Panel } from "../abstract/abstract-product";
import {
  DarkButton,
  DarkCheckbox,
  DarkPanel,
  LightButton,
  LightCheckbox,
  LightPanel,
} from "./concrete-product";

export class DarkFactory implements UIAbstractFactory {
  createButton(): Button {
    return new DarkButton();
  }
  createPanel(): Panel {
    return new DarkPanel();
  }

  createCheckbox(): Checkbox {
    return new DarkCheckbox();
  }
}

export class LightFactory implements UIAbstractFactory {
  createButton(): Button {
    return new LightButton();
  }
  createPanel(): Panel {
    return new LightPanel();
  }

  createCheckbox(): Checkbox {
    return new LightCheckbox();
  }
}
