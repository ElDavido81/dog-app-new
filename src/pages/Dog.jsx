import { Link, useLocation, useParams } from "react-router";
import DogBreed from "../components/DogBreed";
import DogPresent from "../components/DogPresent";

function Dog() {
    const {selecteddog} = useParams();
    const location = useLocation();
    const dog = location.state?.dog;


return (
<>
<div className="menu_top">
        <Link to="/catalog">
        <button className="menu_back">DOGS</button>
        </Link>
        <DogPresent dog={dog}/>
        <Link to ="/">
        <button className="menu_home">HOME</button>
        </Link>
</div>

<div className="doginfo">
        <img src={dog.img} className="bigdog"/>

    <div className="dogname">
        <h2>{dog.name}</h2>
        <DogBreed dog={dog} />
    </div>
    
    <div className="dogdetails">
        <b>Owner:</b> {dog.owner.name} 📞 {dog.owner.phoneNumber}<br></br>
        # {dog.chipNumber}

    </div>

</div>

</>
)

}

export default Dog;