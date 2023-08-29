export const calculateCarValue = (model: string, year: number) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let carValue = 0;

  if (!model || !year) {
    return { error: "Model and year are required" };
  }

  if (isNaN(year) || year < 2000 || year > new Date().getFullYear() || year < 0) {
    return { error: "Invalid year" };
  }

  for (let i = 0; i < model.length; i++) {
    const char = model[i].toLowerCase();
    if (alphabet.includes(char)) {
      carValue += alphabet.indexOf(char) + 1;
    }
  }

  carValue = carValue * 100 + year;
  return carValue;
};
