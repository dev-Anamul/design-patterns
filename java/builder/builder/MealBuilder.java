package builder;

import concretes.items.ChickenBurger;
import concretes.items.Mojo;
import concretes.items.Speed;
import concretes.items.VegBurger;

public class MealBuilder {

    public Meal prepareVegMeal() {

        Meal meal = new Meal();
        meal.addItem(new VegBurger());
        meal.addItem(new Mojo());

        return meal;
    }

    public Meal prepareNonVegMeal() {

        Meal meal = new Meal();
        meal.addItem(new ChickenBurger());
        meal.addItem(new Speed());

        return meal;
    }

}
