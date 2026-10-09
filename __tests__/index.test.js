import sortHeroesByHealth from '../src/index.js';

describe('sortHeroesByHealth', () => {
  test('sorts heroes by health descending', () => {
    const input = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];
    expect(sortHeroesByHealth(input)).toEqual(expected);
  });

  test('does not mutate original array', () => {
    const input = [{ name: 'a', health: 10 }, { name: 'b', health: 100 }];
    const copy = [...input];
    sortHeroesByHealth(input);
    expect(input).toEqual(copy);
  });

  test('handles empty array', () => {
    expect(sortHeroesByHealth([])).toEqual([]);
  });

  test('handles equal health values', () => {
    const input = [{ name: 'a', health: 50 }, { name: 'b', health: 50 }];
    expect(sortHeroesByHealth(input)).toEqual([
      { name: 'a', health: 50 },
      { name: 'b', health: 50 },
    ]);
  });
});