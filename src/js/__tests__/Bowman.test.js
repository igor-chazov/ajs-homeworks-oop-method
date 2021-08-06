import Bowman from '../Bowman';

test('should check the class Bowman', () => {
  class TestBowman {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.level = 1;
      this.type = 'Bowman';
      this.attack = 25;
      this.defence = 25;
    }
  }

  const received = new TestBowman('Bowman');
  const expected = new Bowman('Bowman');
  expect(received).toEqual(expected);
});
