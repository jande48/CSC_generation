module.exports = function sortCategoriesForInsert (inputJson) {
  const input = JSON.parse(inputJson);
  const hashArr = {};
  for (let i = 0; i < input.length; i++) {
    const item = input[i];
    if (hashArr[item.parent_id] == null) hashArr[item.parent_id] = [];
    hashArr[item.parent_id].push(item);
  }

  const properJsonOutput = hierarchySort(hashArr, null, []);

  return JSON.stringify(properJsonOutput);
}

function hierarchySort (hashArr, key, result) {
  // check to see if there are any children
  if (hashArr[key] == undefined) return;

  // separate out the array that have the same parents
  const arrOfParents = hashArr[key];
  for (let i = 0; i < arrOfParents.length; i++){
    result.push(arrOfParents[i]);
    hierarchySort(hashArr, arrOfParents[i]["id"], result);
  }

  return result;
}
