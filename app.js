(function (global) {
  const africanFoods = [
    {
      name: 'Jollof Rice',
      origin: 'West Africa (Ghana & Nigeria)',
      flavor: 'Smoky, spicy tomato base with fragrant spices',
      ingredients: ['long-grain rice', 'tomatoes', 'scotch bonnet', 'onion', 'bell pepper', 'thyme'],
      pairing: 'Grilled chicken, plantain, or fried fish',
      story: 'A celebratory rice dish cooked in a rich tomato-pepper stew. Each country guards its version, from Ghanaian basmati to Nigerian party-style jollof cooked over wood fire.',
      texture: 'Light and fluffy grains coated in sauce'
    },
    {
      name: 'Injera with Doro Wat',
      origin: 'Ethiopia & Eritrea',
      flavor: 'Tangy sourdough flatbread with deeply spiced stew',
      ingredients: ['teff flour', 'berbere spice', 'chicken', 'clarified butter (niter kibbeh)', 'eggs'],
      pairing: 'Ayib (fresh cheese) or misir wat (lentils)',
      story: 'Injera doubles as plate and utensil, perfect for scooping the berbere-heavy chicken stew. Fermentation brings a signature tang that balances the slow-cooked sauce.',
      texture: 'Spongy flatbread with silky, slow-cooked stew'
    },
    {
      name: 'Fufu with Groundnut Soup',
      origin: 'Ghana',
      flavor: 'Nutty, savory, and mildly spicy',
      ingredients: ['cassava', 'plantain', 'groundnuts', 'tomatoes', 'ginger', 'chili'],
      pairing: 'Goes well with okra stew or light soup',
      story: 'Fufu is pounded cassava and plantain, rolled into soft dough that accompanies a velvety peanut-based soup. It is eaten by hand to capture every layer of flavor.',
      texture: 'Soft, stretchy fufu with creamy soup'
    },
    {
      name: 'Ugali with Sukuma Wiki',
      origin: 'Kenya & Tanzania',
      flavor: 'Mild maize base with garlicky sautéed greens',
      ingredients: ['maize meal', 'collard greens', 'tomatoes', 'onion', 'garlic'],
      pairing: 'Nyama choma (grilled meat) or fried tilapia',
      story: 'A comforting staple of stiff maize porridge served with sukuma wiki—greens stretched through the week. It is hearty, simple, and endlessly adaptable.',
      texture: 'Firm, doughy ugali with tender greens'
    },
    {
      name: 'Moroccan Tagine',
      origin: 'Morocco',
      flavor: 'Warm spices with savory-sweet notes',
      ingredients: ['preserved lemon', 'olives', 'cinnamon', 'cumin', 'ginger', 'slow-cooked meat'],
      pairing: 'Couscous, khobz bread, or mint tea',
      story: 'Slowly braised in its conical clay pot, tagine layers aromatics, dried fruit, and preserved lemons to create a mellow, aromatic sauce.',
      texture: 'Fall-apart meat with syrupy sauce'
    },
    {
      name: 'Bobotie',
      origin: 'South Africa',
      flavor: 'Curried meat with sweet-savory custard top',
      ingredients: ['ground beef or lamb', 'curry powder', 'apricot jam', 'bread soaked in milk', 'bay leaves'],
      pairing: 'Yellow rice with raisins and chutney',
      story: 'Cape Malay influences shine in this oven-baked dish—spiced minced meat topped with an egg custard for contrast between creamy and aromatic layers.',
      texture: 'Baked, gently set custard over tender mince'
    }
  ];

  function buildInsight(first, second) {
    if (first.name === second.name) {
      return `You selected ${first.name} twice—try contrasting it with another regional favorite to see how ingredients and textures differ.`;
    }
    return `${first.name} highlights ${first.flavor.toLowerCase()}, while ${second.name} leans toward ${second.flavor.toLowerCase()}. Pairing ${first.pairing.toLowerCase()} next to ${second.pairing.toLowerCase()} makes a tasting menu that moves from ${first.texture.toLowerCase()} to ${second.texture.toLowerCase()}.`;
  }

  function compareSelection(selectedAName, selectedBName) {
    const first = africanFoods.find(food => food.name === selectedAName) || africanFoods[0];
    const second = africanFoods.find(food => food.name === selectedBName) || africanFoods[1];
    return {
      first,
      second,
      insight: buildInsight(first, second)
    };
  }

  function setupPage() {
    if (!global.document) return;

    const foodASelect = global.document.getElementById('foodA');
    const foodBSelect = global.document.getElementById('foodB');
    const cardA = global.document.getElementById('cardA');
    const cardB = global.document.getElementById('cardB');
    const insightBox = global.document.getElementById('insight');
    const compareButton = global.document.getElementById('compareButton');

    function populateSelects() {
      africanFoods.forEach(food => {
        const optionA = new Option(food.name, food.name);
        const optionB = new Option(food.name, food.name);
        foodASelect.add(optionA);
        foodBSelect.add(optionB);
      });
      foodASelect.selectedIndex = 0;
      foodBSelect.selectedIndex = 1;
    }

    function renderFoodCard(food, container) {
      container.innerHTML = `
        <div class="badge">${food.origin}</div>
        <h3>${food.name}</h3>
        <p class="description">${food.story}</p>
        <div class="meta">
          ${food.ingredients.slice(0, 5).map(item => `<span class="pill">${item}</span>`).join('')}
        </div>
        <div class="facts">
          <div class="fact">
            <strong>Flavor profile</strong>
            <span>${food.flavor}</span>
          </div>
          <div class="fact">
            <strong>Best pairing</strong>
            <span>${food.pairing}</span>
          </div>
          <div class="fact">
            <strong>Texture</strong>
            <span>${food.texture}</span>
          </div>
        </div>
      `;
    }

    function compareFoods() {
      const comparison = compareSelection(foodASelect.value, foodBSelect.value);
      renderFoodCard(comparison.first, cardA);
      renderFoodCard(comparison.second, cardB);
      insightBox.textContent = comparison.insight;
    }

    compareButton?.addEventListener('click', compareFoods);
    populateSelects();
    compareFoods();
  }

  const api = { africanFoods, buildInsight, compareSelection };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }

  if (global.document) {
    if (global.document.readyState === 'loading') {
      global.document.addEventListener('DOMContentLoaded', setupPage);
    } else {
      setupPage();
    }
  }

  global.AfricanFoodApp = api;
})(typeof window !== 'undefined' ? window : globalThis);
