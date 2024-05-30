import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    if (!(currency instanceof Currency)) {
      throw TypeError('currency must be an instance of Currency');
    }
    this._currency = currency;
  }

  get amount() { return this._amount; }

  get currency() { return this._currency; }

  set amount(value) { this._amount = value; }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw TypeError('currency must be an instance of Currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  /**
   * @param {Number} amount
   * @param {Number} conversionRate
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
