
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0 || matrix.flat().length === 0) {
    return [];
  }
  const newMatrix = matrix.flatMap((element, index) => {
    if (index % 2 === 0) {
      return element;
    }
    return element.reverse();
  });

  return newMatrix.flat();
}
