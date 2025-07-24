import { Link, Outlet, useNavigation } from "react-router-dom"
import Header from "./Header"
import CartOverview from "../cart/CartOverview"
import Loader from "./Loader";


function AppLayout(){
  // getting a loading status
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="layout">
      {isLoading && <Loader/>}
      <Header/>
      <main style={{backgroundColor: '#f7c1f7'}}>
        <h1>Main and Outlet there 👇🏻</h1>
        <Outlet/>
      </main>
      <CartOverview/>
    </div>
  )
}

export default AppLayout
