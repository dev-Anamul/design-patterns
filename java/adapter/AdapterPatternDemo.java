public class AdapterPatternDemo {
    public static void main(String[] args) {
        AudioPlayer audioPlayer = new AudioPlayer();

        audioPlayer.play("mp3", "audio-file.mp3");
        audioPlayer.play("mp4", "video-file.mp4");
        audioPlayer.play("vlc", "video-file.vlc");
        audioPlayer.play("unknown", "unknown-file.un");
    }
}
