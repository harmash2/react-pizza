import { Link } from "react-router-dom";

function CartOverview() {
  const style = {
    backgroundColor: '#e347ff',
    textAlign: 'center',
    color: 'white',
    fontSize: '1.25rem'
  }
  return (
    <div style={style}>
      <p>
        <span>IT&apos;S A CART OVERVIEW</span>
        <span></span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
