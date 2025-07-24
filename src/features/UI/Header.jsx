import { Link } from "react-router-dom"
import SearchOrder from "../order/SearchOrder";

function Header(){
  return (
    <header style={{borderBottom: 'solid 2px grey'}}>
      <Link to='/'> Header Fast Pizza</Link>
      <SearchOrder/>
      <p> it's a header</p>
    </header>
  )
}

export default Header;
