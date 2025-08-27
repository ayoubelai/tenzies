import React from "react"
import Die from "./Die"

export default function App() {
  const [dice, setDice] = React.useState(generateAllNewDice())

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
      <div className="diceContainer">
        {diceItems}
      </div>
      <button className="rollButton" onClick={roll}>Roll</button>
    </main>
  )
}
