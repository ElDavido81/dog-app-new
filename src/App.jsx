import { Link } from 'react-router'
import DataList from "./components/DataList";
import './App.css'

function App() {

  return (
    <>
    <Link to="/catalog">
    <button className="start" onClick={<DataList></DataList>}></button>
    </Link>
    </>
  )
}

export default App
