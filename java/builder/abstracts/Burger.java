package abstracts;

import concretes.packing.Wrapper;
import interfaces.Item;
import interfaces.Packing;

public abstract class Burger implements Item {

    @Override
    public Packing packing() {
        return new Wrapper();
    }

    @Override
    public abstract float price();

}
