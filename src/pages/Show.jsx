import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function Show() {
    const [country, setcountry] = useState();
    
    const {id} = useParams()

    useEffect( () => {
        fetch(`https://api.countrystatecity.in/v1/countries/${id}`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setcountry(json)
        })

    }, [])

    if (!country) {
        return <h2>That country does not exist in database...</h2>
    }

    return (
        <>
            <div className="country-details">
                <h2>{country.name}</h2>
                <p>Capital: {country.capital}</p>
            </div>
            <Link to={'/'}>
                <p className="back-to-list">Return to Country List</p>
            </Link>
        </>
    );
}

export default Show