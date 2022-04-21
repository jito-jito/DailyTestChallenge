const perimeter = require("./Perimeter")

describe("01 - PerimetersWithCatch", () => {
  const number = 7

  test("When passing the letter 's' should calculate the perimeter of a square", () => {
    const letter = "s"

    const squarePerimeter = perimeter(letter, number)

    expect(squarePerimeter).toBe(4 * number)
  })

  test("When passing the letter 'c' should calculate the perimeter of a circle", () => {
    const letter = "c"

    const circlePerimeter = perimeter(letter, number)

    expect(circlePerimeter).toBe(6.28 * number)
  })

  test("When passing any other letter should return undefined", () => {
    const letter = "z"

    const anyPerimeter = perimeter(letter, number)

    expect(anyPerimeter).toBeUndefined()
  })

})