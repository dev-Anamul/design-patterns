package concretes.items;

import abstracts.ColdDrink;

public class Mojo extends ColdDrink {

    @Override
    public String name() {
        return "Mojo";
    }

    @Override
    public float price() {
        return 40.0f;
    }

}
