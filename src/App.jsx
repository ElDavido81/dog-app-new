import { Link } from 'react-router'
import DataList from "./components/DataList";
import './App.css'

function App() {

  return (
    <>
    <Link to="/catalog">
    <button className="start" onClick={<DataList></DataList>}></button>
    </Link>
    <h3>Welcome - press paw...</h3>
    </>
  )
}

export default App
