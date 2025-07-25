import { useLoaderData } from 'react-router-dom';
import {getMenu} from '../services/apiRestaurant'
import MenuItem from './MenuItem'

function Menu() {
  // Step 3. Geting data, provided by loader f
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map((pizza) =>
        <MenuItem pizza={pizza} key={pizza.id}
      />)}
    </ul>
    );
}

export async function loader(){
  const menu = await getMenu();
  return menu;
}

export default Menu;
