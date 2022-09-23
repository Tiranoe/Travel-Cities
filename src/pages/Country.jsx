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

    //console.log(countries);

    return (
    <div>
        <section className='countries-container'>
            <h1> Where would you like to travel? </h1>
            <h3 class="line"> Pick your vacation destination below:</h3>
            <div class = "countries-list">
        {countries?.map((element) => (
            <ul>
            <Link to={`/country/${element.name}`}>
                <div class="country-name">{element.name}</div>
                <div><img src={element.flag} alt="Country Flag"width="50%"></img></div>
            </Link></ul>
            
            ))}
            </div>
        </section>
    </div>
        )
}

export default Country;