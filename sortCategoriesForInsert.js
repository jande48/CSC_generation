module.exports = function sortCategoriesForInsert (inputJson) {
  const inserted = {};
  const waiting = {};

  return JSON.stringify(
    JSON.parse(inputJson).reduce((output, item) => {
      const parentId = item.parent_id;
      const id = item.id;
      if (parentId === null || inserted[parentId]) {
        output.push(item);
        inserted[id] = true;
        const awaiting = waiting[id];
        if (awaiting) {
          output = output.concat(awaiting);
          delete waiting[id];
        }
      } else {
        if (!waiting[parentId]) {
          waiting[parentId] = [];
        }
        waiting[parentId].push(item);
      }
      return output;
    }, [])
  );
}
