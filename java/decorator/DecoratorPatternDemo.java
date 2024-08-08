public class DecoratorPatternDemo {

    public static void main(String[] args) {

        System.out.println("\nCircle Shape : normal and decorated");
        Shape circle = new Circle();
        Shape redCircle = new RedShapeDecorator(circle);
        circle.draw();
        redCircle.draw();

        System.out.println("\nRectangle shape : normal and decorated");
        Shape rectangle = new Rectangle();
        Shape redRectangle = new RedShapeDecorator(rectangle);
        rectangle.draw();
        redRectangle.draw();

        System.out.println("\nSquare shape : normal and decorated");
        Shape square = new Square();
        Shape redSquare = new RedShapeDecorator(square);
        square.draw();
        redSquare.draw();
    }
}
