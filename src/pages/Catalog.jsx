import { Link } from "react-router";

function Catalog() {

return (
    <>
    <h1>Catalog</h1>
    <Link to="/">Home</Link><br></br>
    <Link to="../dog">Dog</Link>
    </>
)

}

export default Catalog;