public class ProxyPatternDemo {

    public static void main(String[] args) {
        Image image = new ProxyImage("ocean.jpg");

        // image loading from disk
        image.display();

        System.out.println("");

        // image don't loading from disk
        image.display();
    }

}
