const assert = require('assert');
const { test, describe } = require('node:test');
const path = require('path');
const fs = require('fs');
const { africanFoods, buildInsight, compareSelection } = require('../app');

const indexHtml = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

describe('African food comparison data', () => {
  test('list includes six curated dishes', () => {
    assert.strictEqual(africanFoods.length, 6);
    assert.deepStrictEqual(
      africanFoods.map(food => food.name),
      [
        'Jollof Rice',
        'Injera with Doro Wat',
        'Fufu with Groundnut Soup',
        'Ugali with Sukuma Wiki',
        'Moroccan Tagine',
        'Bobotie'
      ]
    );
  });

  test('insight messaging handles duplicate selections gracefully', () => {
    const duplicateInsight = buildInsight(africanFoods[0], africanFoods[0]);
    assert.match(duplicateInsight, /selected Jollof Rice twice/);
  });
});

describe('Comparison logic', () => {
  test('returns paired dishes and descriptive insight', () => {
    const comparison = compareSelection('Injera with Doro Wat', 'Bobotie');
    assert.strictEqual(comparison.first.name, 'Injera with Doro Wat');
    assert.strictEqual(comparison.second.name, 'Bobotie');
    assert.match(comparison.insight, /highlights tangy sourdough/i);
    assert.match(comparison.insight, /leans toward curried meat/i);
  });

  test('falls back to defaults when names are missing', () => {
    const comparison = compareSelection('Unknown Dish', '');
    assert.strictEqual(comparison.first.name, africanFoods[0].name);
    assert.strictEqual(comparison.second.name, africanFoods[1].name);
  });
});

describe('HTML structure', () => {
  test('page retains key containers and controls', () => {
    assert.match(indexHtml, /id="foodA"/);
    assert.match(indexHtml, /id="foodB"/);
    assert.match(indexHtml, /id="comparisonGrid"/);
    assert.match(indexHtml, /app.js/);
  });
});
