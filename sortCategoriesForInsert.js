// This function is a solution the problem at https://bitbucket.org/dbuy/workspace/snippets/rnB4an
// developed by Jacob Anderson on 2/11/2020


module.exports = function sortCategoriesForInsert (inputJson) {

  var arr = inputJson
  // Since this data is hierarchial, it seems that one way to efficiently solve it is to create a hash array that groups objects with the same parent id.
  var hashArr = {};
  for (var i = 0; i < arr.length; i++) {
      if (hashArr[arr[i].parent_id] == null) hashArr[arr[i].parent_id] = [];
      hashArr[arr[i].parent_id].push(arr[i]);
  }

  // Once the data is grouped by parent, a recursive function is called to push all of the children to a 'result' array once their parents have aleady been added.
  function hierarhySort(hashArr, key, result) {

    // check to see if there are any children
    if (hashArr[key] == undefined) return;

    // separate out the array that have the same parents
    var arrOfParents = hashArr[key];
    for (var i=0; i<arrOfParents.length; i++){
      result.push(arrOfParents[i]);
      hierarhySort(hashArr, arrOfParents[i]["id"], result)
    }

    return result
  }
  var properJsonOutput = hierarhySort(hashArr, null, []);
  return properJsonOutput
}
