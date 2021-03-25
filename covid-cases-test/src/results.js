import React from "react";
import style from './covid-results.module.css';

const Results = ({provinceState, countryRegion, lastUpdate, lat, long, confirmed, recovered, deaths, active, admin2, fips, combinedKey, incidentRate, peopleTested, peopleHospitalized, uid, iso3, iso2}) => {
  
  const boldtext = {
    fontSize:'40px',
    fontWeight: 'bold',
  }
  
    return(
        <div className={style.results}>

            <p>Province State</p><p> {provinceState}</p>
            <p>Country</p><p style={boldtext}> {countryRegion}</p>
            <p>Last Update: {lastUpdate}</p>
            <p>Latitude: {lat}</p><p>Longitude: {long}</p>
            <p>Confirmed: {confirmed}</p>
            <p>Recovered: {recovered}</p>
            <p>Deaths: {deaths}</p>
            <p>Active Cases:</p> <span style={boldtext}>{active}</span>
            <p>{admin2}</p>
            <p>{fips}</p>
            <p>Country & State: {combinedKey}</p>
            <p>Incident Rate: {incidentRate}</p>
            <p>People Tested: {peopleTested}</p>
            <p>People Hospitalized: {peopleHospitalized}</p>
            <p>UID: {uid}</p>
            <p>ISO3: {iso3}</p>
            <p>ISO2: {iso2}</p>
        </div>
    )
}

export  default Results;