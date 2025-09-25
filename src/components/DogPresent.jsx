import greenLamp from '../assets/green.png';
import greenOffLamp from '../assets/greenOff.png';
import redLamp from '../assets/red.png';

const DogPresent = ({dog}) => {

console.log(dog.present);

    return (
        <>
        {dog.present ? (
                <img src={greenLamp} className="lamp" />
            
        ) : (
            <img src={greenOffLamp} className="lamp" />
        )}
        </>
    )
}

export default DogPresent;