import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./features/UI/Home"
import Menu, {loader as menuLoader} from "./features/menu/Menu"
import Cart from "./features/cart/Cart"
import Order, {loader as orderLoader} from "./features/order/Order"
import CreateOrder, {action as createOrderAction} from "./features/order/CreateOrder"
import AppLayout from "./features/UI/AppLayout"
import Error from "./features/UI/Error"


//! Data Loader usage:
// 1. Create a loader f wich fetchind data in Component's file;
// 2. Provide the loader f to the path with that Component
// 3. Provide the data to the page via useLoaderData() inside Component itself
const router = createBrowserRouter([
{
  path: '/',
  element: <AppLayout/>,
  errorElement: <Error/>,
  children:[

    {path: '/',element: <Home/>},
    {path: '/menu', element: <Menu/>, errorElement: <Error/>, loader: menuLoader},
    {path: '/cart', element: <Cart/>},
    {path: '/order/new', element: <CreateOrder/>, action: createOrderAction},
    // we use colomn ( : ) here '/order/:orderId' to get data through useParams later
    {
      path: '/order/:orderId',
      element: <Order/>,
      errorElement: <Error/>,
      loader: orderLoader
    }
  ]}

])

function App() {


  return (
    <RouterProvider router={router}>
    <h1>
      Hello Vite!
    </h1>
    </RouterProvider>
  )
}

export default App
