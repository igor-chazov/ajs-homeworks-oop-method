import Magician from '../Magician';

test('should check the class Magician', () => {
  class TestMagician {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.level = 1;
      this.type = 'Magician';
      this.attack = 10;
      this.defence = 40;
    }
  }

  const received = new TestMagician('Magician');
  const expected = new Magician('Magician');
  expect(received).toEqual(expected);
});
