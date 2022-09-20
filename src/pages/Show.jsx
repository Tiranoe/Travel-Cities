import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function Show() {
    const [country, setcountry] = useState();
    const {id} = useParams();

    useEffect( () => {
        fetch(`https://restcountries.com/v3.1/name/${id}`) //requestOptions)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setcountry(json)
        })

    }, [])

    if (!country) {
        return <h2>That country does not exist in database...</h2>
    }

    console.log(country);

    return (
        <>
            <div className="country-details">
                <h2>{country.name.common}</h2>
                <p>Capital: {country.currency}</p>
            </div>
            <Link to={'/'}>
                <p className="back-to-list">Return to Country List</p>
            </Link>
        </>
    );
}

export default Show