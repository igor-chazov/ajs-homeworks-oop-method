import Character from '../character';

test('should check the class Character', () => {
  class TestCharacter {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.level = 1;
    }
  }

  const received = new TestCharacter('Тест');
  const expected = new Character('Тест');
  expect(received).toEqual(expected);
});

test('should check the class Character no name', () => {
  function errorName() {
    const testName = new Character();
    return testName;
  }
  expect(errorName).toThrowError(Error);
});

test('should check the levelUp health = 0', () => {
  function errorHealthOfNull() {
    const testHealthOfNull = new Character('Тест');
    testHealthOfNull.health = 0;
    return testHealthOfNull.levelUp();
  }
  expect(errorHealthOfNull).toThrowError(Error);
});

test('should levelUp the attack', () => {
  function TestAttackUp() {
    return 30;
  }
  const received = TestAttackUp();

  const testUpAttack = new Character('Тест');
  testUpAttack.attack = 25;
  testUpAttack.levelUp();
  const expected = testUpAttack.attack;

  expect(received).toBe(expected);
});

test('should levelUp the defence', () => {
  function TestDefenceUp() {
    return 30;
  }
  const received = TestDefenceUp();

  const testUpDefence = new Character('Тест');
  testUpDefence.defence = 25;
  testUpDefence.levelUp();
  const expected = testUpDefence.defence;

  expect(received).toBe(expected);
});

test.each([
  {
    points: 10,
    expected: () => {
      let healthTest = 100;
      healthTest -= 10 * (1 - 25 / 100);
      return healthTest;
    },
  },
  {
    points: 50,
    expected: () => {
      let healthTest = 100;
      healthTest -= 50 * (1 - 25 / 100);
      return healthTest;
    },
  },
  {
    points: 60,
    expected: () => {
      let healthTest = 100;
      healthTest -= 60 * (1 - 25 / 100);
      return healthTest;
    },
  },
])('should points damage the health', ({ points, expected }) => {
  const test = new Character('Тест');
  test.defence = 25;
  test.damage(points);
  const received = test.health;
  expect(received).toBe(expected());
});

test('should points damage the health < 0', () => {
  function damageHealth() {
    let health = -55;
    if (health < 0) health = 0;
    return health;
  }
  const received = damageHealth();

  const testHealth = new Character('Тест');
  testHealth.defence = 25;
  testHealth.damage(200);
  const expected = testHealth.health;
  expect(received).toBe(expected);
});
