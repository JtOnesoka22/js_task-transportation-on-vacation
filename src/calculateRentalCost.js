/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const minDaysDescont = 3;
  const maxDaysDescont = 7;
  const descontThreeDays = 20;
  const descontSevenDays = 50;
  const dayPrice = 40;
  const totalPrice = dayPrice * days;

  if (days >= maxDaysDescont) {
    return totalPrice - descontSevenDays;
  }

  if (days >= minDaysDescont) {
    return totalPrice - descontThreeDays;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
