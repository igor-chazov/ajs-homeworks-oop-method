import Undead from '../Undead';

test('should check the class Undead', () => {
  class TestUndead {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.level = 1;
      this.type = 'Undead';
      this.attack = 25;
      this.defence = 25;
    }
  }

  const received = new TestUndead('Undead');
  const expected = new Undead('Undead');
  expect(received).toEqual(expected);
});
