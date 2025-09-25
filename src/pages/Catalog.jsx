import { Link } from "react-router";
import DataList from "../components/DataList";

function Catalog() {

return (
    <>
    <div className="menu_top">
        <Link to="/">
        <button className="menu_back">HOME</button>
        </Link>
    </div>
    
    <div className="list">
    <DataList></DataList>
    </div>
    
    </>
)

}

export default Catalog;