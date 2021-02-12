var result = require("./sortCategoriesForInsert.js");

var arr = [
  {
      "name": "Accessories",
      "id": 1,
      "parent_id": 20,
    },
    {
      "name": "Watches",
      "id": 57,
      "parent_id": 1
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

console.log(result(arr));
