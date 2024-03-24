const assert = require("assert");
const { multiply, evenOrOdd, numberToString, reverseString, findOpposite, makeNegative, boolToWord, removeChar, stringToNumber, greet, addNumbers } = require("./03-Activity-Practice");

describe("Multiply", () => {
  it("fixed tests", () => {
    assert.strictEqual(multiply(1, 1), 1);
    assert.strictEqual(multiply(2, 1), 2);
    assert.strictEqual(multiply(2, 2), 4);
    assert.strictEqual(multiply(3, 5), 15);
    assert.strictEqual(multiply(5, 0), 0);
    assert.strictEqual(multiply(0, 5), 0);
    assert.strictEqual(multiply(0, 0), 0);
  });
});

describe("evenOrOdd", () => {
  it("2 is even", () => {
    assert.strictEqual(evenOrOdd(2), "Even");
  });
  it("7 is odd", () => {
    assert.strictEqual(evenOrOdd(7), "Odd");
  });
  it("-42 is even", () => {
    assert.strictEqual(evenOrOdd(-42), "Even");
  });
  it("-7 is odd", () => {
    assert.strictEqual(evenOrOdd(-7), "Odd");
  });
  it("0 is even", () => {
    assert.strictEqual(evenOrOdd(0), "Even");
  });
});

describe("reverseString", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(reverseString("world"), "dlrow");
    assert.strictEqual(reverseString("hello"), "olleh");
    assert.strictEqual(reverseString(""), "");
    assert.strictEqual(reverseString("h"), "h");
  });
});

describe("numberToString", () => {
  it("test", () => {
    assert.strictEqual(numberToString(67), "67");
  });

  it("test", () => {
    assert.strictEqual(numberToString(0), "0");
  });
});

describe("Fixed tests", () => {
  it("should return -1", () => {
    assert.strictEqual(findOpposite(1), -1);
  });
  it("should return 0", () => {
    assert.strictEqual(findOpposite(0), 0);
  });
  it("should return -4.25", () => {
    assert.strictEqual(findOpposite(4.25), -4.25);
  });
  it("should return -3.3333333", () => {
    assert.strictEqual(findOpposite(3.3333333), -3.3333333);
  });
  it("should return 12525220.3325", () => {
    assert.strictEqual(findOpposite(-12525220.3325), 12525220.3325);
  });
  it("should return 5", () => {
    assert.strictEqual(findOpposite(-5), 5);
  });
});

describe("makeNegative", () => {
  it("test", () => {
    Test.assertEquals(makeNegative(42), -42);
  });

  it("test", () => {
    Test.assertEquals(makeNegative(-5), -5);
  });

  it("test", () => {
    Test.assertEquals(makeNegative(0), 0);
  });
});

describe("boolToWord", () => {
  it("Testing for basic tests", () => {
    assert.strictEqual(boolToWord(true), "Yes");
    assert.strictEqual(boolToWord(false), "No");
  });
});

describe("removeChar", () => {
  it("Fixed Tests", () => {
    assert.strictEqual(removeChar("eloquent"), "loquen");
    assert.strictEqual(removeChar("country"), "ountr");
    assert.strictEqual(removeChar("person"), "erso");
    assert.strictEqual(removeChar("place"), "lac");
    assert.strictEqual(removeChar("ooopsss"), "oopss");
  });
});

describe("stringToNumber", function () {
  it("should work for the examples", function () {
    Test.assertEquals(stringToNumber("1234"), 1234);
    Test.assertEquals(stringToNumber("605"), 605);
    Test.assertEquals(stringToNumber("1405"), 1405);
    Test.assertEquals(stringToNumber("-7"), -7);
  });
});

describe("greet", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
    assert.strictEqual(greet("Paula"), "Hello, Paula how are you doing today?");
  });
});

describe("addNumbers", () => {
  it("should return 0 when number is 0", () => {
    assert.strictEqual(addNumbers(0), 0);
  });

  it("should return the correct sum when number is positive", () => {
    assert.strictEqual(addNumbers(1), 1);
    assert.strictEqual(addNumbers(2), 4);
    assert.strictEqual(addNumbers(3), 9);
    assert.strictEqual(addNumbers(4), 16);
    assert.strictEqual(addNumbers(5), 25);
  });

  it("should return NaN when number is not a number", () => {
    assert.strictEqual(isNaN(addNumbers("abc")), true);
    assert.strictEqual(isNaN(addNumbers(null)), true);
    assert.strictEqual(isNaN(addNumbers(undefined)), true);
    assert.strictEqual(isNaN(addNumbers(true)), true);
    assert.strictEqual(isNaN(addNumbers(false)), true);
    assert.strictEqual(isNaN(addNumbers([])), true);
    assert.strictEqual(isNaN(addNumbers({})), true);
  });
});
