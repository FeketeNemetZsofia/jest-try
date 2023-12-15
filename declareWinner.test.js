const declareWinner = require("./declareWinner")

const strongFighter = {
    name : "Szikla Szilárd",
    health : 40,
    damagePerAttack: 10,

}

const weakFighter = {
    name : "Gipsz Jakab",
    health : 20,
    damagePerAttack: 5,
}

test("first fighter should win", () => {
    expect(declareWinner(strongFighter, weakFighter, strongFighter.name)).toBe(strongFighter.name)
})

test("second to go fighter should win", () => {
    expect(declareWinner(weakFighter, strongFighter, strongFighter.name)).toBe(strongFighter.name)
})

test("second fighter should win", () => {
    expect(declareWinner(strongFighter, weakFighter, weakFighter.name)).toBe(strongFighter.name)
})