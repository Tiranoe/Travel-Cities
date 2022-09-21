import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Country() {
    const [countries, setCountries] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        const data = await fetch(`https://restcountries.com/v2/all`)
        const json = await data.json()
            console.log(json)
            setCountries(json)
    }
    fetchData();
    }, [])

    console.log(countries);

    return (
    <div>
        <section className='countries-container'>
            <h1> test </h1>
        {countries?.map((element) => (
            <Link to={`/country/${element.name}`}>
                {element.name}
            </Link>
            ))}
        </section>
    </div>
        )
}

export default Country;