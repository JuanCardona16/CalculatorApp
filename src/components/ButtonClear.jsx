import '../styles/ButtonClear.css'

const ButtonClear = (props) => {
  return (
    <button className='Button ButtonClear' onClick={props.manejarClick} >
      {props.children}
    </button>
  )
}

export default ButtonClear