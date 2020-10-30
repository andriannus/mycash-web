export const ceil = amount => {
  const isString = typeof amount === "string";
  const isNumber = typeof amount === "number";
  const isValidAmount = isString || isNumber;

  if (!amount || !isValidAmount) return 0;

  const validAmount = isString ? Number(amount) : amount;

  return Math.ceil(validAmount);
};
