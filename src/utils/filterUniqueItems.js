export const filterUniqueItems = (arr, idKey) => {
  const obj = arr.reduce((acc, item) => {
    acc[item[idKey]] = item;
    return acc;
  }, {});
  return Object.values(obj);
}