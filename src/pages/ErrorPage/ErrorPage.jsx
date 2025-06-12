import { useNavigate } from "react-router-dom"

function ErrorPage({error}){
  const goTo = useNavigate();

  return (
    <div className="error-page">
      <h1>An error ocurred!</h1>
      {error && <p>Error message: {error.message}</p>}
      <button onClick={() => goTo('/')}>Back to home</button>
    </div>
  )
}

export default ErrorPage