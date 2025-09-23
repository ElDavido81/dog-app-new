import { Link, useLocation, useParams } from "react-router";
import DogBreed from "../components/DogBreed";
import DogPresent from "../components/DogPresent";

function Dog() {
    const {selecteddog} = useParams();
    const location = useLocation();
    const dog = location.state?.dog;


return (
<>
    <h2>{dog.name} <DogPresent dog={dog}/></h2>
    <img src={dog.img}/>
    <p>
<DogBreed dog={dog} />
    </p>
    <p>{dog.age}</p>
    <p>{dog.owner.name}</p>
    <Link to ="/catalog">All dogs</Link><br></br>
    <Link to ="/">Home</Link>
</>
)

}

export default Dog;