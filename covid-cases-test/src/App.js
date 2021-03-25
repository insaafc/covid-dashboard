
import React,{useEffect, useState} from "react";
import Results from './results';
import './App.css';
import Form from "./Form";

const App = () => {

  const[results, setresults] = useState([]);
  const[search,setSearch] =  useState('');
  const[find, setFind] = useState("");

  // useEffect(() => {
  //   getResults();
  // }, [find]);
  
  useEffect(() => {
    getResults();
  }, []);

  const getResults = async () => {
    const cases = await fetch ("https://covid19.mathdro.id/api/recovered");
    const data = await cases.json();
    setresults(data);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  // runs when we submit form
  //e prevent , stops refresh while typing 
  const getSearch = e =>{
    console.log('getSearch', search);
    e.preventDefault();
    setFind(search);
    //setSearch("");
  };

  const filteredResults = results.filter(result => {
      return (result.countryRegion === find);
  });

  //console.log({results, filteredResults});
  
  return(
    <div className="App">
      <h1 className="heading-text">Welcome to our COVID-19 Dashboard</h1>
      <p className="heading-text">Search in the box below for the latest statistics according to country</p>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-btn" type="submit">Search</button>
      </form>

      

    
      <div className="covid-results">
     
        {filteredResults.map(result => (
            
              <Results 
              key={result.combinedKey}
              {...result}
              // provinceState={result.provinceState} 
              // countryRegion={result.countryRegion} 
              // lastUpdate={result.lastUpdate} 
              // lat={result.lat} 
              // long={result.long} 
              // confirmed={result.confirmed}
              // recovered={result.recovered}
              // deaths={result.deaths}
              // active={result.active}
              // admin2={result.admin2}
              // fips={result.fips}
              // combinedKey={result.combinedKey}
              // incidentRate={result.incidentRate}
              // peopleTested={result.peopleTested}
              // peopleHospitalized={result.peopleHospitalized}
              // uid={result.uid}
              // iso3={result.iso3}
              // iso2={result.iso2}
              />
            ))}
    
      </div>

      
      <div>
        <Form/>
    </div>
    </div>
  )
}

export default App;
