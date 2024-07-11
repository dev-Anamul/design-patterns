public class AbstractFactoryPatternDemo {

    public static void main(String[] args) {
        // ! shape factory
        AbstractFactory shapeFactory = FactoryProducer.geFactory(false);

        // drawing rectangle shape
        Shape rectangle = shapeFactory.getShape("RECTANGLE");
        rectangle.draw();

        // square shape
        Shape square = shapeFactory.getShape("SQUARE");
        square.draw();

        // ! rounded shape factory
        AbstractFactory roundedShapeFactory = FactoryProducer.geFactory(true);

        // rounded rectangle
        Shape roundedRectangle = roundedShapeFactory.getShape("RECTANGLE");
        roundedRectangle.draw();

        // rounded square
        Shape roundedSquare = roundedShapeFactory.getShape("SQUARE");
        roundedSquare.draw();
    }

}
