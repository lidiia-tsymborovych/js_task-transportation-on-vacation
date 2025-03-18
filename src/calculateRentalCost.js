/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_RENT = 40;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;

  let totalCost = DAY_RENT * days;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    totalCost -= SHORT_TERM_DISCOUNT;
  } else if (days >= LONG_TERM) {
    totalCost -= LONG_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
