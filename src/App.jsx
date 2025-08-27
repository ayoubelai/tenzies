import React from "react"
import Die from "./Die"

export default function App() {
  const [dice, setDice] = React.useState(generateAllNewDice())

  const gameWon = checkIfWon()

  function checkIfWon() {
    const firstValue = dice[0].value

    for (const die of dice){
      if (!die.isHeld || die.value !== firstValue) {
        return false
      }
    }

    return true
  }

  function generateAllNewDice() {
    const dice = []
    for (let i = 0; i < 10; i++){
      dice.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: i
      })
    }
    return dice
  }

  const diceItems = dice.map(die => (
    <Die key={die.id} id={die.id} value={die.value} isHeld={die.isHeld} hold={hold}/>
  ))

  function roll() {
    const newDice = dice.map(die => 
      die.isHeld === false ? {
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: die.id
      } : die
    )
    setDice(newDice)
  }

  function hold(id) {
    const newDice = dice.map(die => 
      die.id === id ? {...die, isHeld: !die.isHeld} : die
    )
    setDice(newDice)
  }

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="gameInstructions">Try rolling the dice until they're all the same ! Click each die to hold it at its current value between rolls.</p>
      <div className="diceContainer">
        {diceItems}
      </div>
      <button className="rollButton" onClick={roll}>{gameWon ? "New Game" : "Roll"}</button>
    </main>
  )
}
