import React from "react"
import Die from "./Die"

export default function App() {
  const [dice, setDice] = React.useState(generateAllNewDice())

  function generateAllNewDice() {
    const dice = []
    for (let i = 0; i < 10; i++){
      dice.push(Math.floor(Math.random() * 6) + 1)
    }
    return dice
  }

  const diceItems = dice.map((die, index) => (
    <Die key={index} value={die}/>
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
