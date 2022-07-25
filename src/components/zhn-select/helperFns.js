
export const isNumber = n => typeof n === 'number'
  && n-n === 0;

export const getDataIndex = element => {
  const { dataset } = element
  , { index } = dataset || {};
  return Number(index);
};
