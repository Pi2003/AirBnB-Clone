import React, { Component, useEffect, useState } from 'react';
import './CityVenues.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../utility/Spinner/Spinner';
import Venues from '../../utility/Venue/Venues';

function CityVenues(){
    const {cityName}=useParams()
    const [venues,setVenues]=useState([]);
    const [header,setHeader]=useState("");
    useEffect(()=>{
        const url=`${window.apiHost}/venues/city/${cityName}`;
        console.log(url)
        const fetchData=async ()=>{
            const resp= await axios.get(url,{cityName});
            console.log(resp.data)
            setVenues(resp.data.venues)
            setHeader(resp.data.header)
        }
        fetchData();
    },[]);

        if(!header){
            return <Spinner/>
        }
        return(
            <div className='row'>
                <Venues venues={venues} header={header} />
            </div>
        )
}
export default CityVenues;