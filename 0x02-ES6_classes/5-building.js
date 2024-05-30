export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    const missing = Object.getOwnPropertyNames(Building.prototype)
      .find((name) =>
        typeof Building.prototype[name] === 'function' && !Object.getPrototypeOf(this).hasOwnProperty(name)
      );
    if (missing) throw Error('Class extending Building must override evacuationWarningMessage');
  }

  get sqft() { return this._sqft; }

  // abstract
  evacuationWarningMessage() {}
}
