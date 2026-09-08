
export const isFn = (
 fn
) => typeof fn === "function"

const regFloat = /^-?\d*(\.\d+)?$/;
export const isFloat = (strOrNumber) => {
  const trimmed = (""+strOrNumber).trim()

  return isNaN(parseFloat(trimmed))
    ? false
    : trimmed !== "" && regFloat.test(trimmed);
}
