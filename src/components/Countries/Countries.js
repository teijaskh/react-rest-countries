import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    // console.log(countries);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    return (
        <div>
            <h1>Total number of countries in the world:  {countries.length}</h1>
            <div className='countries-container'>
                {
                    countries.map(country => <Country country={country} key={country.latlng}> </Country>)
                }
            </div>
        </div >
    );
};

export default Countries;