import Daemon from '../Daemon';

test('should check the class Daemon', () => {
  class TestDaemon {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.level = 1;
      this.type = 'Daemon';
      this.attack = 10;
      this.defence = 40;
    }
  }

  const received = new TestDaemon('Daemon');
  const expected = new Daemon('Daemon');
  expect(received).toEqual(expected);
});
