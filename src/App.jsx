import React from "react"
import Die from "./Die"
import Confetti from 'react-confetti'

export default function App() {
  const [dice, setDice] = React.useState(() => generateAllNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  const gameWon = checkIfWon()
  let buttonText = "Roll"

  if (tenzies) {
    buttonText = "New Game"
  } else if (gameWon) {
    buttonText = "Tenzies !"
  }

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

  function newGame() {
    if (tenzies) {
      setDice(generateAllNewDice())
      setTenzies(false)
    } else {
      setTenzies(true)
    }
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="gameInstructions">Try rolling the dice until they're all the same then yell (Click) Tenzies !
         Click each die to hold it at its current value between rolls.</p>
      <div className="diceContainer">
        {diceItems}
      </div>
      <button className={`rollButton ${gameWon ? "tenzies" : ""}`} onClick={gameWon ? newGame : roll}>{buttonText}</button>
      
    </main>
  )
}
