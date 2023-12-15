const findUnique = require("./findUnique")






test("first number should be the odd one", ()=>{expect(findUnique([1, 2, 2])).toBe(1)})

test("second number should be the odd one", ()=>{expect(findUnique([5, 2, 5])).toBe(2)})

test("neither first or second number should be the odd one", ()=>{expect(findUnique([5, 5, 5, 5, 5, 5, 5, 6])).toBe(6)})

test("empty array should throw invalid input", ()=>{
    expect(() => findUnique([]).toThrow("Invalid input"))
})