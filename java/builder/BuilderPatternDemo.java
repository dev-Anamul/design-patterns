import builder.Meal;
import builder.MealBuilder;

public class BuilderPatternDemo {

    public static void main(String[] args) {
        MealBuilder mealBuilder = new MealBuilder();

        System.out.println("Preparing veg meal for you :)");
        Meal vegMeal = mealBuilder.prepareVegMeal();
        System.out.println("Total Cost => " + vegMeal.getCost());
        vegMeal.showItems();

        System.out.println();

        System.out.println("Preparing non veg meal for you :)");
        Meal nonVegMeal = mealBuilder.prepareNonVegMeal();
        System.out.println("Total Cost => " + nonVegMeal.getCost());
        nonVegMeal.showItems();

    }

}
