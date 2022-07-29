import { useState } from 'react'
import { evaluate } from 'mathjs'
import Button from './Button'
import ButtonClear from './ButtonClear'
import Pantalla from './Pantalla'
import ButtonResults from './ButtonResults'
import ThemeSwitcher from './ThemeSwitcher'
import ButtonDel from './ButtonDel'

const Calculator = () => {
  const [input, setInput] = useState('')

  const agregarValor = (valor) => {
    setInput(input + valor)
  }

  const eliminarValor = () => {
    setInput((prevInput) => prevInput.slice(0, -1))
  }

  const limpiearInput = () => {
    setInput('')
  }

  const resultado = () => {
    if (input) return setInput(evaluate(input))
  }

  return (
    <div className="calculatorApp">
      <div className="header">
          <h1 className='header__title'>Calc</h1>
          <ThemeSwitcher />
        </div>
        <div className="content">
          <Pantalla input={input}/>
          <div className="ContainerButtons">
            <div className='fila'>
              <Button manejarClick={agregarValor}>7</Button>
              <Button manejarClick={agregarValor}>8</Button>
              <Button manejarClick={agregarValor}>9</Button>
              <ButtonDel manejarClick={() => eliminarValor()}>Del</ButtonDel>
            </div>
            <div className='fila'>
              <Button manejarClick={agregarValor}>4</Button>
              <Button manejarClick={agregarValor}>5</Button>
              <Button manejarClick={agregarValor}>6</Button>
              <Button manejarClick={agregarValor}>+</Button>
            </div>
            <div className='fila'>
              <Button manejarClick={agregarValor}>1</Button>
              <Button manejarClick={agregarValor}>2</Button>
              <Button manejarClick={agregarValor}>3</Button>
              <Button manejarClick={agregarValor}>-</Button>
            </div>
            <div className='fila'>
              <Button manejarClick={agregarValor}>.</Button>
              <Button manejarClick={agregarValor}>0</Button>
              <Button manejarClick={agregarValor}>/</Button>
              <Button manejarClick={agregarValor}>*</Button>
            </div>
            <div className='fila'>
              <ButtonClear manejarClick={() => limpiearInput()}>RESET</ButtonClear>
              <ButtonResults manejarClick={() => resultado()}>=</ButtonResults>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Calculator