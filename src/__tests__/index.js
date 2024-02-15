import Character from '../index';

const checkClass = new Character('John', 'bowman');
const correctObj = {
  name: 'John',
  type: 'bowman',
  health: 100,
  level: 1,
  attack: undefined,
  defence: undefined,
};

const levelUpObj = {
  name: 'John',
  type: 'bowman',
  health: 100,
  level: 2,
  attack: 30,
  defence: 30,
};

test('Checking Name with Error', () => {
  expect(() => {
    const errorArg = new Character('1', 'bowman');
  }).toThrow(new Error('Ошибка: неверное количество символов'));
});

test('Checking Type with Error', () => {
  expect(() => {
    const errorArg = new Character('John', 'bwman');
  }).toThrow(new Error('Ошибка: неверный тип'));
});

test('Creating new Character', () => {
  expect(checkClass).toEqual(correctObj);
});

test('Checking levelUp with health <=0', () => {
  expect(() => {
    checkClass.health = 0;
    checkClass.levelUp();
  }).toThrow(new Error('Ошибка: нельзя повысить левел умершего'));
});

test('Checking damage work with health <=0', () => {
  checkClass.defence = 25;
  checkClass.damage(25);
  expect(checkClass.health).toBe(0);
});

test('Checking levelUp with health >0', () => {
  checkClass.health = 100;
  checkClass.attack = 25;
  checkClass.defence = 25;
  checkClass.levelUp();
  expect(checkClass).toEqual(levelUpObj);
});

test('Checking damage work with health >0', () => {
  checkClass.damage(25);
  expect(checkClass.health).toBeCloseTo(82.5);
});
