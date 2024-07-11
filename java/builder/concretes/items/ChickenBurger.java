package concretes.items;

import abstracts.Burger;

public class ChickenBurger extends Burger {

    @Override
    public String name() {
        return "Chicken Burger";
    }

    @Override
    public float price() {
        return 150.0f;
    }

}
