import Bowman from '../Bowman';

const correctArr = new Bowman('Jhon', 'bowman');

test('Checking Name with Error', () => {
  expect(() => {
    const errorArr = new Bowman('1', 'bowman');
  }).toThrow(new Error('Ошибка: неверное количество символов'));
});

test('Checking Type with Error', () => {
  expect(() => {
    const errorArr = new Bowman('Jhon', 5);
  }).toThrow(new Error('Ошибка: неверный тип'));
});

test('Checking add Attack', () => {
  expect(correctArr.attack).toBe(25);
});

test('Checking add Defence', () => {
  expect(correctArr.defence).toBe(25);
});

test('Checking levelUp with health <=0', () => {
  expect(() => {
    correctArr.health = 0;
    correctArr.levelUp();
  }).toThrow(new Error('Ошибка: нельзя повысить левел умершего'));
});

test('Checking damage work with health <=0', () => {
  correctArr.damage(25);
  expect(correctArr.health).toBe(0);
});

const levelUpArr = {
  name: 'Jhon',
  type: 'bowman',
  health: 100,
  level: 2,
  attack: 30,
  defence: 30,
};

test('Checking levelUp with health >0', () => {
  correctArr.health = 100;
  correctArr.levelUp();
  expect(correctArr).toEqual(levelUpArr);
});

test('Checking damage work with health >0', () => {
  correctArr.damage(25);
  expect(correctArr.health).toBeCloseTo(82.5);
});
