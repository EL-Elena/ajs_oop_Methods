import Zombie from '../Zombie';

const checkClass = new Zombie('John', 'zombie');
const correctObj = {
  name: 'John',
  type: 'zombie',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};

const levelUpObj = {
  name: 'John',
  type: 'zombie',
  health: 100,
  level: 2,
  attack: 48,
  defence: 12,
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
  expect(checkClass.health).toBeCloseTo(78);
});
