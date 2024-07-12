public class BridgePatternDemo {
    public static void main(String[] args) {
        Circle redCircle = new Circle(100, 100, 15, new RedCircle());
        Circle greenCircle = new Circle(150, 150, 11, new GreenCircle());

        redCircle.draw();
        greenCircle.draw();
    }
}
