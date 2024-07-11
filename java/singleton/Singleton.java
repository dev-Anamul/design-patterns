public class Singleton {

    private static Singleton instance = null;

    private Singleton() {
    }

    // get instance of the object
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }

        return instance;
    }

    // method
    public void showMessage() {
        System.out.println("Hello from the singleton instance ");
    }

}
