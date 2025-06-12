import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Shop from '../pages/Shop/Shop'
import fetchData from './fetchData'
import { createBrowserRouter } from 'react-router-dom'
import CartPage from '../containers/CartPage/CartPage'
import ShopPage from '../containers/ShopPage/ShopPage'

const router = createBrowserRouter([
  { path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  { path: 'shop',
    element: <Shop />,
    loader: () => {
      return fetchData()
    },
  }
])

export default router