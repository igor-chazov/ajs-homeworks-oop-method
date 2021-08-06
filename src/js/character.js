export default class Character {
  constructor(name) {
    if (!name || name.length < 2 || name.length > 10) {
      throw new Error('ОШИБКА! Не верно задано имя');
    }

    this.name = name;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить левел умершего');
    }

    this.level += 1;

    if (this.attack) {
      this.attack += (this.attack / 100) * 20;
    }

    if (this.defence) {
      this.defence += (this.defence / 100) * 20;
    }

    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) this.health = 0;
  }
}
