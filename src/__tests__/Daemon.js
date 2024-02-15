import Daemon from '../Daemon';

const checkClass = new Daemon('John', 'daemon');
const correctObj = {
  name: 'John',
  type: 'daemon',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};

const levelUpObj = {
  name: 'John',
  type: 'daemon',
  health: 100,
  level: 2,
  attack: 12,
  defence: 48,
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
  expect(checkClass.health).toBeCloseTo(87);
});
