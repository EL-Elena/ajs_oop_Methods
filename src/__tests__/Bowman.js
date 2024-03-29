import Bowman from '../Bowman';

const checkClass = new Bowman('John', 'bowman');
const correctObj = {
  name: 'John',
  type: 'bowman',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};

const levelUpObj = {
  name: 'John',
  type: 'bowman',
  health: 100,
  level: 2,
  attack: 30,
  defence: 30,
};

test('Creating new Character', () => {
  expect(checkClass).toEqual(correctObj);
});

test('Checking levelUp with health >0', () => {
  checkClass.levelUp();
  expect(checkClass).toEqual(levelUpObj);
});

test('Checking damage work with health >0', () => {
  checkClass.damage(25);
  expect(checkClass.health).toBeCloseTo(82.5);
});
