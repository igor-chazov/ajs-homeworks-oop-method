import Swordsman from '../Swordsman';

test('should check the class Swordsman', () => {
  class TestSwordsman {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.level = 1;
      this.type = 'Swordsman';
      this.attack = 40;
      this.defence = 10;
    }
  }

  const received = new TestSwordsman('Swordsman');
  const expected = new Swordsman('Swordsman');
  expect(received).toEqual(expected);
});
