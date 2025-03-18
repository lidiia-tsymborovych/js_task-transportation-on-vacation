/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  let totalCost = dayRent * days;

  if (days >= 3 && days < 7) {
    totalCost -= 20;
  } else if (days >= 7) {
    totalCost -= 50;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
