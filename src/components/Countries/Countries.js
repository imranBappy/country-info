import React from 'react';
import './countries.css'
const Countries = (props) => {
    const {
        name,
        alpha2Code,
        region,
        flag,
        timezones: [timeZone]
    }
        = props.country
    let style = {

    }



    return (
        <div style={{ border: '1px solid', marginTop: 20, width: 350 }}>
            <img className='img' src={flag} alt="" />
            <h4 >Name: {name}</h4>
            <h4 className='body'>alpha2Code: {alpha2Code}</h4>
            <p className='body'>region: {region}</p>
            <button className='button' onClick={() => props.handelAddCountry(props.country)}>Add Country</button>
        </div >
    );
};

export default Countries;