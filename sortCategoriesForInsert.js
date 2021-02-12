module.exports = function sortCategoriesForInsert (inputJson) {
  var arr = inputJson;
  var hashArr = {};
  for (var i = 0; i < arr.length; i++) {
    if (hashArr[arr[i].parent_id] == null) hashArr[arr[i].parent_id] = [];
    hashArr[arr[i].parent_id].push(arr[i]);
  }

  var properJsonOutput = hierarchySort(hashArr, null, []);

  return properJsonOutput;
}

function hierarchySort (hashArr, key, result) {
  // check to see if there are any children
  if (hashArr[key] == undefined) return;

  // separate out the array that have the same parents
  var arrOfParents = hashArr[key];
  for (var i = 0; i < arrOfParents.length; i++){
    result.push(arrOfParents[i]);
    hierarchySort(hashArr, arrOfParents[i]["id"], result);
  }

  return result;
}
