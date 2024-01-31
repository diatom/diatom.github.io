export const elems = `<div>Here is the largest cheese database on the entire Internet.</div>
<search>
  <label for="searchInput">Find a Cheese ❤️</label>
  <input type="text" id="searchInput"/>
  <button id="searchButton" type="submit">Search 🧀</button>
  </search>
<div>The search will be correct if you enter the word literally without errors.</div>
<form is="my-tags"></form>`

export let cheese = [
    {
      id: 1,
      name: `Cheddar`,
      age: `3-24 months`,
      milk: `Cow`,
      since: `12th century AD`,
      type: `Semi-hard, hard`,
      mold: `No`,
      taste: `Round, spicy`,
      description: `Most popular semi-hard cheese`,
      tags: `semihard, hard, spicy, cow, mature, England`,
    },
    {
      id: 2,
      name: `Parmesan`,
      age: `12-36 months`,
      milk: `Cow`,
      since: `13th century AD`,
      type: `Hard`,
      mold: `No`,
      taste: `Rich, nutty`,
      description: `Firm and granular cheese with a strong flavor`,
      tags: `hard, spicy, nutty, cow, mature, Italy`,
    },
    {
      id: 3,
      name: `Camembert`,
      age: `3-8 weeks`,
      milk: `Cow`,
      since: `Late 18th century`,
      type: `Soft`,
      mold: `Yes`,
      taste: `Creamy, earthy`,
      description: `Soft, creamy cheese with a bloomy rind`,
      tags: `soft, creamy, cow, young, France`,
    },
    {
      id: 4,
      name: `Gruyère`,
      age: `5-12 months`,
      milk: `Cow`,
      since: `12th century AD`,
      type: `Hard`,
      mold: `No`,
      taste: `Savory, slightly sweet`,
      description: `Firm and creamy Swiss cheese with a nutty flavor`,
      tags: `semihard, hard, savory, sweet, cow, mature, Swiss`,
    },
    {
      id: 5,
      name: `Gouda`,
      age: `1-24 months`,
      milk: `Cow`,
      since: `12th century AD`,
      type: `Semi-hard, hard`,
      mold: `No`,
      taste: `Buttery, mellow`,
      description: `Dutch cheese with a smooth and creamy texture`,
      tags: `semihard, hard, buttery, cow, Dutch`,
    },
  ]
  
  export const tags = [
    `young`,
    `mature`,
    `cow`,
    `sheep`,
    `goat`,
    `fresh`,
    `soft`,
    `semihard`,
    `hard`,
    `round`,
    `spicy`,
    `nutty`,
    `mellow`,
    `buttery`,
    `sweety`,
    `creamy`,
    `salty`,
    `mold`,
    `blue`,
    `Swiss`,
    `England`,
    `Italy`,
    `Spain`,
    `France`, 
  ];