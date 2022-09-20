import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Country() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://api.countrystatecity.in/v1/countries')
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setCountries(json.results)
        })
    }, [])

    return (
    <div>
        <section className='countries-container'>
            {countries.map((element) => {
                return(
                    <Link to={`/${element.url.match(/(\d+)(?=\/$)/g)}`} key={element.url.match(/(\d+)(?=\/$)/g)}><h1>{element.name}</h1> 
                    </Link>
                )
            })}
        </section>
    </div>
        )
}

export default Country;