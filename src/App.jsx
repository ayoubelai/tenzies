import React from "react"
import Die from "./Die"

export default function App() {
  const [dice, setDice] = React.useState(generateAllNewDice())

  function generateAllNewDice() {
    const dice = []
    for (let i = 0; i < 10; i++){
      dice.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: true
      })
    }
    return dice
  }

  const diceItems = dice.map((die, index) => (
    <Die key={index} value={die.value} isHeld={die.isHeld}/>
  ))

  function handleClick() {
    setDice(generateAllNewDice())
  }

  return (
    <main>
      <div className="diceContainer">
        {diceItems}
      </div>
      <button className="rollButton" onClick={handleClick}>Roll</button>
    </main>
  )
}
