const Tetrahedral  = require("./Tetrahedral.js")


describe("02 - Tetrahedral", () => {

  test("When passing the number 0 return 0", () => {
    const tetrahedralFloors = 0

    const result = Tetrahedral(tetrahedralFloors)

    expect(result).toBe(0)
  })

  test("When passing the floors number of a Tetrahedral, should calculate the number of items to create it", () => {
    const tetrahedralFloors = 5

    const result = Tetrahedral(tetrahedralFloors)

    expect(result).toBe(35)
  })
  
})