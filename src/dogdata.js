const apiUrl = 'https://api.jsonbin.io/v3/b/68d24d78ae596e708ff85d16?meta=false'
const apiKey = '$2a$10$mAYnStCqzmmJXwXXXqvKKeQafqcxdJsPem4dRMdhnp5Mr9qpRcSha'
const apiMeta = 'false'
const button = document.querySelector('#get');

fetch(apiUrl, 
    {headers: {
    'X-Master-Key': apiKey,
    'X-Bin-Meta': "false"}
})
.then(response => response.json())
.then(data => { 
    const { metadata, ...cleanData } = data;
    const array = cleanData.record;
    const dataList = document.getElementById('data-list')

    array.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name;
        dataList.appendChild(listItem);        
    });
})
.catch(error => {console.error('Fel!', error);
})


// button.addEventListener('click', async e => {

//     console.log('click')

//     const response = await fetch(apiUrl);

//     console.log('2. got response:', response)

//     const dogdata = await response.json();

//     console.log('3. got data:', dogdata);

//     const dogs = dogdata.results;

//     console.log(dogs)

//     // createQuestions(questions);

// })