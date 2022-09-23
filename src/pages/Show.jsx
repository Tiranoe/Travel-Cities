import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function Show() {
    const [country, setcountry] = useState();
    const {id} = useParams();

    useEffect( () => {
        fetch(`https://restcountries.com/v2/name/${id}`)
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
        <section className='countries-container'>
            <div className="country-details">
                <h2>{country[0].name}</h2>
                <h4> Also Known as: {country[0].altSpellings[0]}, {country[0].altSpellings[1]}, {country[0].altSpellings[2]}</h4>
                <p>Capital: {country[0].capital}</p>
                <p>Continent: {country[0].region}</p>
                <p>Population: {country[0].population} people</p>
                <p>Currency: {country[0].currencies[0].name} Money Symbol: {country[0].currencies[0].symbol} </p>
                <p>Flag: <img src={country[0].flag} width="100px" alt=""></img></p>
                <p>Location (Latitude, Longitude) {country[0].latlng[0]}, {country[0].latlng[1]}</p>
            </div>
            <Link to={'/'}>
                <p className="back-to-list">Return to Country List</p>
            </Link>
        </section>
        </>
    );
}

export default Show