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


    return (
        <>
            <div className="country-details">
                <h2>{country[0].name.common}</h2>
                <p>Capital: {country[0].capital}</p>
                <p>Continent: {country[0].continents}</p>
                <p>Population: {country[0].population} people</p>                <p>Flag: <img src={country[0].flags.png} width="100px"></img></p>
                <p>Coat Of Arms: <img src={country[0].coatOfArms.png} width="80px"></img></p>
                <p>Location (Latitude, Longitude) {country[0].latlng[0]}, {country[0].latlng[1]}</p>
            </div>
            <Link to={'/'}>
                <p className="back-to-list">Return to Country List</p>
            </Link>
        </>
    );
}

export default Show