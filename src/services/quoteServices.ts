export const calculateQuote = (car_value: number, risk_rating: number) => {
  if (!car_value || !risk_rating || typeof risk_rating !== 'number' ) {
    return { error: "Missing or Invalid parameters" };
  }


  if (car_value.toString().length > 9) {
    return { error: "Car value is too high" };
  }
  if (car_value < 0) {
    return { error: "Invalid car value" };
  }
  if (risk_rating > 5 || risk_rating < 1) {
    return { error: "Invalid risk rating" };
  }

  const calculatePremium = ({ car_value, risk_rating }: { car_value: number; risk_rating: number }) => {
    const yearlyPremium = car_value * (risk_rating / 100);
    const monthlyPremium = yearlyPremium / 12;
    return {
      monthly_premium: parseFloat(monthlyPremium.toFixed(2)),
      yearly_premium: parseFloat(yearlyPremium.toFixed(2)),
    };
  };

  const premiumData = calculatePremium({ car_value, risk_rating });

  return { premiumData };
};

