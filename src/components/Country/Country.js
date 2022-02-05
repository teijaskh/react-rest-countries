import React from 'react';
import './Country.css';

const Country = (props) => {

    const { name, capital, flags } = props.country;

    // console.log(props);
    return (
        <div className='country'>
            <h4>Country Name : {name.common}</h4>
            <img src={flags.png} alt="" />

            <p>Capital: {capital}</p>
        </div>
    );
};

export default Country;