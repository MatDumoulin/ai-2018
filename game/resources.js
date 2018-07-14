const Vector = require('victor');

module.exports = class Resources {
  constructor(regularPositions, silverPositions, goldPositions) {
    this.regular = regularPositions;
    this.silver = silverPositions;
    this.gold = goldPositions;
    this.allResources = this.regular.concat(this.silver).concat(this.gold);
  }

  static parse(payload) {
    return new Resources(
      payload.regular.map(r => Vector.fromObject(r)),
      payload.silver.map(r => Vector.fromObject(r)),
      payload.gold.map(r => Vector.fromObject(r))
    );
  }
};
