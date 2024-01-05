import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>Main page</h1>
      <Link to="cart">View cart</Link>
    </div>
  )
}


export default App;
