import '../styles/Button.css'

const Button = (props) => {
  return (
    <button className='Button' onClick={() => props.manejarClick(props.children)} >
      {props.children}
    </button>
  )
}

export default Button