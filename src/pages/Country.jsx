import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Country() {
    const [countries, setCountries] = useState();

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setCountries(json)
        })

    }, [])

    console.log(countries);

    return (
    <div>
        <section className='countries-container'>
            {countries.map((element) => {
                return(
                    <Link to={`/${element.URL.match(/(\d+)(?=\/$)/g)}`} key={element.URL.match(/(\d+)(?=\/$)/g)}><h1>{element.name}</h1> 
                    </Link>
                )
            })}
        </section>
    </div>
        )
}

export default Country;