import '../styles/ButtonDel.css'

const ButtonDel = ({ children, manejarClick }) => {
  return (
    <button className="Button ButtonDel" onClick={manejarClick}>
      {children}
    </button>
  )
}

export default ButtonDel