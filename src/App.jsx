import styles from './App.module.css'
import { RouterProvider } from 'react-router-dom'
import router from './assets/router.jsx'

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App