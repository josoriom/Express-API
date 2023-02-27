export const toJSON = (array) => {
  const result = [];
  for (const item of array) {
    const { ...json } = item;
    result.push(json);
  }
  return result;
};
