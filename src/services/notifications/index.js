export const getAll = () =>
  new Promise((resolve) => window.setTimeout(() => resolve([1, 2, 3]), 2000));
