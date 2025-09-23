const DogPresent = ({dog}) => {

    return (
        <>
        
        {dog.present === 'true' ? (
            <>🟢</>
        ) : (
            <>🔴</>
        )}
        </>
    )

}

export default DogPresent;