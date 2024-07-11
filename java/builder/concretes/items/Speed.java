package concretes.items;

import abstracts.ColdDrink;

public class Speed extends ColdDrink {

    @Override
    public String name() {
        return "Speed";
    }

    @Override
    public float price() {
        return 30.0f;
    }
}
