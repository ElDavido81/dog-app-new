import { Link } from "react-router";
import DataList from "../components/DataList";

function Catalog() {

return (
    <>
    <h1>Catalog</h1>

    <DataList></DataList>

    <Link to="/">Home</Link><br></br>

    </>
)

}

export default Catalog;