const DogBreed = ({dog}) => {

return (

<>
{dog.breed === 'male' ? (
    <>♂️</>
) : (
    <>♀️</>
)}
</>

)

}

export default DogBreed;