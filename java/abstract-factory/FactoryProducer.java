public class FactoryProducer {
    public static AbstractFactory geFactory(boolean rounded) {
        if (rounded) {
            return new RoundedShapeFactory();
        }

        return new ShapeFactory();
    }
}
