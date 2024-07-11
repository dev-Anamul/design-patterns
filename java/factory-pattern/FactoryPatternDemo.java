public class FactoryPatternDemo {
    public static void main(String[] args) {
        ShapeFactory shapeFactory = new ShapeFactory();

        // circle shape
        Shape shapeOne = shapeFactory.getShape("CIRCLE");
        shapeOne.draw();

        // rectangle shape
        Shape shapeTwo = shapeFactory.getShape("RECTANGLE");
        shapeTwo.draw();

        // square shape
        Shape shapeThree = shapeFactory.getShape("SQUARE");
        shapeThree.draw();

    }

}
