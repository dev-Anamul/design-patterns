public class Stock {

    private String name = "ABC product stock";
    private int quantity = 10;

    public void sell() {
        System.out.println("Stock [ Name: " + this.name + ", Quantity: " + this.quantity + " ] sold.");
    }

    public void buy() {
        System.out.println("Stock [ Name: " + this.name + ", Quantity: " + this.quantity + " ] bought.");
    }

}
