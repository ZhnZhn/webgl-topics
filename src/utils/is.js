
export const isFunction = (fn) => {
  return typeof fn === "function";
}

const regFloat = /^-?\d*(\.\d+)?$/;
export const isFloat = (strOrNumber) => {
  const trimmed = (""+strOrNumber).trim()

  if (isNaN(parseFloat(trimmed))){
    return false;
  }

  return trimmed !== "" && regFloat.test(trimmed);
}
