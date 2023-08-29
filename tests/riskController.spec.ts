import { describe, it, expect } from "@jest/globals";
import { calculateRiskRating } from "../src/services/riskServices";

describe("risk rating tests", () => {
  it("should return risk rating of 1 when one words identified.", () => {
    // Arrange
    const claim_history = "My only claim was a crash into my house's garage door.";
    const expected = { riskRating: 1 };

    // Act
    const actual = calculateRiskRating(claim_history);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return risk rating of 2 when two words identified.", () => {
    // Arrange
    const claim_history = "My only claim was a crash into my house's garage door that left a scratch on my car.";
    const expected = { riskRating: 2 };

    // Act
    const actual = calculateRiskRating(claim_history);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return risk rating of 3 when three words identified.", () => {
    // Arrange
    const claim_history = "My only claim was for a crash when I collided into my house's garage door. There was a nasty bump on my car.";
    const expected = { riskRating: 3 };

    // Act
    const actual = calculateRiskRating(claim_history);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return risk rating of 4 when four words identified.", () => {
    // Arrange
    const claim_history = "My only claim was a crash into my house's garage door that scratched my car and bumped.  There are no other crashes.";
    const expected = { riskRating: 4 };

    // Act
    const actual = calculateRiskRating(claim_history);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return risk rating of 5 when five words identified.", () => {
    // Arrange
    const claim_history = "I have had multiple crashes. I bumped a wall. I collided with an oncoming car. I smashed my car into a fence. I accidentally keyed my car which left a huge scratch.";
    const expected = { riskRating: 5 };

    // Act
    const actual = calculateRiskRating(claim_history);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return risk rating of 5 when more than five keywords.", () => {
    // Arrange
    const claim_history = "Bump. Crash. Collide. Smash. Scratch. Bump. Crash. Collide. Smash. Scratch.";
    const expected = { riskRating: 5 };

    // Act
    const actual = calculateRiskRating(claim_history);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return an error when claim_history is an empty string", () => {
    // Arrange
    const claim_history = "";
    const expected = { error: "Invalid value or missing claim history" };

    // Act
    const actual = calculateRiskRating(claim_history);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return risk rating of 1 when no keywords identified", () => {
    // Arrange
    const claim_history = "I have never made a claim on my insurance";
    const expected = { riskRating: 1 };

    // Act
    const actual = calculateRiskRating(claim_history);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return error when only numbers present", () => {
    // Arrange
    const claim_history = "123456";
    const expected = { error: "Invalid value or missing claim history" };

    // Act
    const actual = calculateRiskRating(claim_history);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return error when there are no spaces in string", () => {
    // Arrange
    const claim_history = "asdfsadfsdaf";
    const expected = { error: "Invalid value or missing claim history" };

    // Act
    const actual = calculateRiskRating(claim_history);

    // Assert
    expect(actual).toEqual(expected);
  });
});
