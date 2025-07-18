import Header from './Header'
import CartOverview from '../cart/CartOverview'
import { Outlet } from 'react-router-dom'


function AppLayout(){
  // const styleOutlet = {
  //   backgroundColor: '#c7c9e1'
  // }
  return (
    <div>
      <Header/>
      <main>
        <h1>h1 inside AppLayout component</h1>
        <Outlet />
      </main>
      <CartOverview/>
    </div>
  )
}

export default AppLayout
