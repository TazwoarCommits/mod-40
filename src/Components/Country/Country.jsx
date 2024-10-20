import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    const {name , flags ,population , area , cca3 } = country
    const [visited , setState] = useState(false)

    const handleVisitState = () =>{
        setState(!visited) ;
    }

    console.log(country)
    return (
        <div className={`country ${visited? 'visited' : 'default'}`}>
            <h3>Name : {name?.common}</h3>
            <img src={flags['png']} alt="" />
            <h4> Population : {population}</h4>
            <h4> Area : {area}</h4>
            <p>cca3 : {cca3}</p>
            <button className={visited && 'visit-btn'} onClick={handleVisitState}>{visited? 'visited' : 'visit'}</button>
            {/* {visited ?' i have visited'  : ' want to go'} */}
        </div>
    );
};

export default Country;
