import './App.css';
import React from 'react'
import Dice from './Components/Dice.js'

function App() {

  const [diceArr, setDiceArr] =  React.useState(newDice())
  const [isWon, setWon] = React.useState(false)

  React.useEffect(() => {
      let diceVal = diceArr[0].val
      const sameVal = (currDice) => currDice.val === diceVal
      const isFrozen = (currDice) => currDice.freeze
      setWon(prevState => diceArr.every(sameVal) && diceArr.every(isFrozen))
  }, [diceArr])
  
  React.useEffect(() => {
    if (isWon) {
      alert("You Won!")
    }
  } , [isWon])

  function generateDice() {
    let val = Math.ceil(Math.random() *6)
    return {
      val: val,
      freeze: false
    }
  }

  function newDice() {
    let newDiceArr = new Array(10).fill(0)
    newDiceArr = newDiceArr.map(dice => generateDice())
    return newDiceArr
  }

  function roll() {

    function rollOldDice() { 
      setDiceArr(dices => dices.map(dice =>
      {
        if (!dice.freeze) {
          return generateDice()
      } else {
        return dice
      }} 
    ))}

      if (isWon) {
        setDiceArr(newDice())
        setWon(false)
      } else {
        rollOldDice()
      }
  }

  function freezeDice(id) {
      setDiceArr(diceArr.map((dice,idx) => {
        if (idx === id) {
          return {
            ...dice,
            freeze: !dice.freeze
          }
        } else {
          return dice
        }
      }))

  }

  const renderDice = diceArr.map((dice, idx) => <Dice 
        key={idx}
        val={dice.val}
        freeze={dice.freeze}
        freezeDice={() => freezeDice(idx)}
    />)

  return (
    <main>
        <h1> Tenzies </h1>
        <p className='description'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
        <div className='diceContainer'> 
          {renderDice}
        </div>
        <button onClick={roll}>{isWon ? 'New Game?' : 'Roll'}</button>  
    </main>)

}

export default App;
