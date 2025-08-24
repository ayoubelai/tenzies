import Die from "./Die"

export default function App() {

  function generateAllNewDice() {
    const dice = []
    for (let i = 0; i <= 10; i++){
      dice.push(Math.floor(Math.random() * 6)+1)
    }
    return dice
  }

  return (
    <main>
      <div className="diceContainer">
        <Die value="1"/>
        <Die value="6"/>
        <Die value="4"/>
        <Die value="5"/>
        <Die value="2"/>
        <Die value="3"/>
        <Die value="5"/>
        <Die value="6"/>
        <Die value="2"/>
        <Die value="1"/>
      </div>
    </main>
  )
}
