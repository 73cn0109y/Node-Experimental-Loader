export default class Log {
  static info(format, ...args) {
    console.log(`[Logger] ${format}`, ...args);
  }
}
