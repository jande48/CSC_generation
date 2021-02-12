const sortCategoriesForInsert = require("./sortCategoriesForInsert.js");

const input = [
  {
      "name": "Accessories",
      "id": 1,
      "parent_id": 20,
    },
    {
      "name": "Watches",
      "id": 57,
      "parent_id": 1,
    },
    {
      "name": "Men",
      "id": 20,
      "parent_id": null,
    },
    {
      "name": "Women",
      "id": 22,
      "parent_id": null,
    },
    {
      "name": "Bags",
      "id": 99,
      "parent_id": 22,
    },
    {
      "name": "Hand Bags",
      "id": 31,
      "parent_id": 99,
    },
    {
      "name": "Doggy Bags",
      "id": 32,
      "parent_id": 99,
    },
    {
      "name": "Purse Bags",
      "id": 33,
      "parent_id": 99,
    },
];

const output = JSON.parse(
  sortCategoriesForInsert(
    JSON.stringify(input)
  )
);
console.log(output);

const inserted = {};
for (let i = 0; i < output.length; i++) {
  const item = output[i];
  const parentId = item["parent_id"];
  if (parentId) {
    assert(inserted[parentId], "Trying to insert child before parent");
  }
  inserted[item.id] = true;
}
console.log("TEST PASSES");

function assert (pass, str) {
  if (!pass) {
    throw new Error(str);
  }
}
