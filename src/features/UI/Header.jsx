import { Link } from "react-router-dom"


function Header(){
  const style = {
    textAlign: 'center',
    backgroundColor: 'tomato',
    fontSize: '1.25rem',
    color: 'white',
  }
  return (
    <header style={style}>
      <Link to="/">Fast react Pizza</Link>
      <p>IT&apos;S A HEADER</p>
    </header>
  )
}

export default Header
