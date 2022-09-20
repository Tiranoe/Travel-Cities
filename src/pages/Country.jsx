import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Country() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const URL='https://restcountries.com/v3.1/all'

        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                const json = await response.json();
                console.log(json);
                setCountries(json.countries);
            } catch(err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

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