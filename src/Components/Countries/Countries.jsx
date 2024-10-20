import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './Countries.css'


const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h1>Countries : {countries.length}</h1>
            <div>
                <h2>Visited Countries</h2>
            </div>
            <div className="country-countainer">
                {
                    countries.map(country => <Country key={country.cca3} country={country}></Country>)
                }

            </div>
        </div>
    );
};

export default Countries 