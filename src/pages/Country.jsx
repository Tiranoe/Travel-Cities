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
            <h1> Where would you like to travel? </h1>
            <h3> Pick your vacation destination below:</h3>
        {countries?.map((element) => (
            <ul>
            <Link to={`/country/${element.name}`}>
                <div>{element.name}</div>
                <div><img src={element.flag} width="50px"></img></div>
            </Link></ul>
            
            ))}
        </section>
    </div>
        )
}

export default Country;