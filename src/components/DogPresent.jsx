const DogPresent = ({dog}) => {

console.log(dog.present);

    return (
        <>
        {dog.present ? (
            <p class="lamp">🟢</p>
        ) : (
            <p class="lamp">🔴</p>
        )}
        </>
    )
}

export default DogPresent;