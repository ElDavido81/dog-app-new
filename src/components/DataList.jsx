import { useEffect, useState } from "react"
import { Link } from "react-router";

const DataList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://api.jsonbin.io/v3/b/68d24d78ae596e708ff85d16?meta=false';
        const apiKey = '$2a$10$mAYnStCqzmmJXwXXXqvKKeQafqcxdJsPem4dRMdhnp5Mr9qpRcSha';

        fetch(apiUrl, {
            headers: {
                'X-Master-Key': apiKey,
                'X-Bin-Meta': 'false',
            }
        })
        .then(response => response.json())
        .then(data => {
            const { record } = data;
            setData(record);
        })
        .catch(error => {
            console.error('Något gick fel:', error);
        });

    }, []);

return (
    <ul>
{data.map((item, index) => (
    <li key={index}>
    <Link to="../dog">{item.name}</Link>
    </li>
))}
    </ul>
);
};

export default DataList;