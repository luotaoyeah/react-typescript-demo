export class Helper {
  static convertCelsiusToFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
  }

  static convertFahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
  }

  /**
   *
   * @param {string} temperature
   * @param {(n: number) => number} converter
   * @returns {number}
   */
  static convert(temperature: number, converter: (n: number) => number): number {
    const convertedTemperature = converter(temperature);

    return Math.round(convertedTemperature * 1000) / 1000;
  }
}