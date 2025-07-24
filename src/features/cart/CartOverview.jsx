import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div style={{borderTop: 'solid 2px tomato'}}>
      <p>
        <span>CartOverview</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
