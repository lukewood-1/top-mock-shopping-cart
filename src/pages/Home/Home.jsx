import { Link } from "react-router-dom"

function Home(){
  return (
  <>
    <h1>This is home</h1>
    <button><Link to='shop'>Shop now</Link></button>
  </>
  )
}

export default Home