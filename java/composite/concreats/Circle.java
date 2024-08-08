import java.awt.Color;
import java.awt.Graphics;

public class Circle extends BaseShape {
    public int radius;

    public Circle(int x, int y, int radius, Color color) {
        super(x, y, color);
        this.radius = radius;
    }

    @Override
    public int getWidth() {
        return this.radius * 2;
    }

    @Override
    public int getHeight() {
        return this.radius * 2;
    }

    @Override
    public void paint(Graphics graphics) {
        super.paint(graphics);
        graphics.drawOval(x, y, this.getWidth() - 1, this.getHeight() - 1);
    }

}
