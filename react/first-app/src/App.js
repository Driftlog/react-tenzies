import './App.css';
import React from 'react'
import Dice from './Components/Dice.js'

function App() {

  const [diceArr, setDiceArr] =  React.useState(newDice())


  function generateDice() {
    let val = Math.ceil(Math.random() *6)
    return {
      val: val,
      freeze: false
    }
  }

  function newDice() {
    return Array.from({ length: 10 }, generateDice);
  }

  function renderDice() {
    return diceArr.map((dice, idx) => <Dice 
        key={dice.idx}
        val={dice.val}
        freeze={dice.freeze}
        freezeDice={() => freezeDice(idx)}
    />)
  }

  function freezeDice(id) {
      setDiceArr(diceArr.map((dice,idx) => {
        if (id === idx) {
          return {
            ...dice,
            freeze: !dice.freeze
          }
        } else {
          return dice
        }
      }))
  }

  return (
    <main>
        <h1> Tenzies </h1>
        <p className='description'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
        <div className='diceContainer'> 
          {renderDice()}
        </div>  
    </main>)

}

export default App;
