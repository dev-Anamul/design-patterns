import { UIAbstractFactory } from "./ui-implementation/abstract/abstract-factory";
import {
  DarkFactory,
  LightFactory,
} from "./ui-implementation/concrete/concrete-factory";

// UI Abstract Factory implementation
// Dark theme
const darkFactory: UIAbstractFactory = new DarkFactory();
const darkButton = darkFactory.createButton();
const darkPanel = darkFactory.createPanel();
const darkCheckbox = darkFactory.createCheckbox();
darkButton.click();
darkPanel.render();
darkCheckbox.check();

// light theme
const lightFactory: UIAbstractFactory = new LightFactory();
const lightButton = lightFactory.createButton();
const lightPanel = lightFactory.createPanel();
const lightCheckbox = lightFactory.createCheckbox();
lightButton.click();
lightPanel.render();
lightCheckbox.check();
