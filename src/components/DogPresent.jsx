const DogPresent = ({dog}) => {

console.log(dog.present);

    return (
        <>
        {dog.present ? (
            <>🟢</>
        ) : (
            <>🔴</>
        )}
        </>
    )
}

export default DogPresent;