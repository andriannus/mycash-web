export const rupiahCurrency = amount => {
  const isString = typeof amount === "string";
  const isNumber = typeof amount === "number";
  const isValidAmount = isString || isNumber;

  if (!amount || !isValidAmount) return "Rp0";

  const validAmount = isString ? Number(amount) : amount;

  return `Rp${validAmount.toLocaleString("id-ID")}`;
};
