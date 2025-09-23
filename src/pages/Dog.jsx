import { Link, useLocation, useParams } from "react-router";

function Dog() {
    const {selecteddog} = useParams();
    const location = useLocation();
    const dog = location.state?.dog;


return (
<>
    <h2>{dog.name}</h2>
    <img src={dog.img}/>
    <p>{dog.breed}</p>
    <p>{dog.sex}</p>
    <p>{dog.age}</p>
    <p>{dog.owner.name}</p>
    <Link to ="/catalog">All dogs</Link><br></br>
    <Link to ="/">Home</Link>
</>
)

}

export default Dog;