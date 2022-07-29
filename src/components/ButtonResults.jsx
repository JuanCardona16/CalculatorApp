import '../styles/ButtonResults.css'

const ButtonResults = (props) => {
  return (
    <button className='Button ButtonResults' onClick={props.manejarClick}>
      {props.children}
    </button>
  )
}

export default ButtonResults