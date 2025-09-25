const DogBreed = ({dog}) => {

return (

<>
{dog.sex === 'male' ? (
    <h3>♂️</h3>
) : (
    <h3>♀️</h3>
)}
</>

)

}

export default DogBreed;