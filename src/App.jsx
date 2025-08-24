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

  const diceItems = dice.map(die => (
    <Die key={die} value={die}/>
  ))

  return (
    <main>
      <div className="diceContainer">
        {diceItems}
      </div>
    </main>
  )
}
