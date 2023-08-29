import { describe, it, expect } from "@jest/globals";
import { calculateQuote } from "../src/services/quoteServices";

describe("calculateQuote function", () => {
  it("should calculate for average car value and risk rating", () => {
    // Arrange
    const car_value = 6600;
    const risk_rating = 3;
    const expected = { premiumData: { monthly_premium: 16.5, yearly_premium: 198 } };

    // Act
    const actual = calculateQuote(car_value, risk_rating);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should calculate for low car value and risk rating", () => {
    // Arrange
    const car_value = 3000;
    const risk_rating = 2;
    const expected = { premiumData: { monthly_premium: 5, yearly_premium: 60 } };

    // Act
    const actual = calculateQuote(car_value, risk_rating);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should calculate premium for a high car value and low risk rating", () => {
    // Arrange
    const car_value = 50000;
    const risk_rating = 1;
    const expected = { premiumData: { monthly_premium: 41.67, yearly_premium: 500 } };

    // Act
    const actual = calculateQuote(car_value, risk_rating);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should calculate premium for a low car value and high risk rating", () => {
    // Arrange
    const car_value = 2000;
    const risk_rating = 5;
    const expected = { premiumData: { monthly_premium: 8.33, yearly_premium: 100 } };

    // Act
    const actual = calculateQuote(car_value, risk_rating);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return error message for car value exceeding maximum allowed", () => {
    // Arrange
    const car_value = 1000000000;
    const risk_rating = 4;
    const expected = { error: "Car value is too high" };

    // Act
    const actual = calculateQuote(car_value, risk_rating);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return error message for negative car value", () => {
    // Arrange
    const car_value = -5000;
    const risk_rating = 2;
    const expected = { error: "Invalid car value" };

    // Act
    const actual = calculateQuote(car_value, risk_rating);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return error message for risk rating > 5", () => {
    // Arrange
    const car_value = 6600;
    const risk_rating = 6;
    const expected = { error: "Invalid risk rating" };

    // Act
    const actual = calculateQuote(car_value, risk_rating);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return error message for risk rating < 1", () => {
    // Arrange
    const car_value = 6600;
    const risk_rating = 0;
    const expected = { error: "Missing or Invalid parameters" };

    // Act
    const actual = calculateQuote(car_value, risk_rating);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return error message for invalid risk rating type", () => {
    // Arrange
    const car_value = 7500;
    const risk_rating: any = "high";
    const expected = { error: "Missing or Invalid parameters" };

    // Act
    const actual = calculateQuote(car_value, risk_rating);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return error message for car value not provided", () => {
    // Arrange
    const car_value: any = "";
    const risk_rating = 3;
    const expected = { error: "Missing or Invalid parameters" };

    // Act
    const actual = calculateQuote(car_value, risk_rating);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return error message for risk rating not provided", () => {
    // Arrange
    const car_value = 6000;
    const risk_rating: any = "";
    const expected = { error: "Missing or Invalid parameters" };

    // Act
    const actual = calculateQuote(car_value, risk_rating);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return error message for both car value and risk rating not provided", () => {
    // Arrange
    const car_value: any = "";
    const risk_rating: any = "";
    const expected = { error: "Missing or Invalid parameters" };

    // Act
    const actual = calculateQuote(car_value, risk_rating);

    // Assert
    expect(actual).toEqual(expected);
  });

});
