public class RealImage implements Image {

    private String filename;

    public RealImage(String filename) {
        this.filename = filename;
        this.loadFromDisk(filename);
    }

    @Override
    public void display() {
        System.out.println("Displaying image...." + filename);
    }

    private void loadFromDisk(String filename2) {
        System.out.println("Loading from disk..." + filename);
    }
}
