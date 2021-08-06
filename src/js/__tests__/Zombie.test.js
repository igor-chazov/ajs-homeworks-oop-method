import Zombie from '../Zombie';

test('should check the class Zombie', () => {
  class TestZombie {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.level = 1;
      this.type = 'Zombie';
      this.attack = 40;
      this.defence = 10;
    }
  }

  const received = new TestZombie('Zombie');
  const expected = new Zombie('Zombie');
  expect(received).toEqual(expected);
});
