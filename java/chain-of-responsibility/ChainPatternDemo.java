public class ChainPatternDemo {

    private static AbstractLogger getChainOfLoggers() {
        AbstractLogger errorLogger = new ErrorLogger(AbstractLogger.ERROR);
        AbstractLogger fileLogger = new FileLogger(AbstractLogger.DEBUG);
        AbstractLogger consoleLogger = new ConsoleLogger(AbstractLogger.INFO);

        errorLogger.setNextLogger(fileLogger);
        fileLogger.setNextLogger(consoleLogger);

        return errorLogger;
    }

    public static void main(String[] args) {

        AbstractLogger loggerChain = getChainOfLoggers();

        System.out.println();
        loggerChain.logMessage(AbstractLogger.INFO, "This is an info message.");
        System.out.println();
        loggerChain.logMessage(AbstractLogger.DEBUG, "This is a debug message.");
        System.out.println();
        loggerChain.logMessage(AbstractLogger.ERROR, "This is an error message.");
        System.out.println();

    }

}
