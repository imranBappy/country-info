import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Cart from './components/Cart/Cart';

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  const [search, setSearch] = useState()
  console.log(search);
  const searchHandler = e => {
    let result = countries.find(country => country.name.toLowerCase() === e.target.value.toLowerCase())
    setSearch(result)
  }

  const [cart, setCart] = useState([])

  const handelAddCountry = (cuntray) => {
    let newCountry = [...cart, cuntray]
    setCart(newCountry)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>ALl countries: {countries.length}</h1>
        <p>{cart.length}</p>
        <Cart cart={cart} />
        <input placeholder="Search by cuntray name.." className="searchIn" onChange={searchHandler} type="text" />
        {
          search ? <p>Name:
            {search.name}&nbsp;|
            alpha2Code : {search.alpha2Code} &nbsp;|
              area: {search.area}&nbsp;|
             demonym: {search.demonym}&nbsp;|
             region: {search.region}&nbsp;|
             capital: {search.capital}&nbsp;
          </p> : ''
        }
        <ol>
          {
            countries.map(country => <Countries
              key={country.alpha2Code}
              handelAddCountry={handelAddCountry}
              country={country}
            />)
          }
        </ol>
      </header>
    </div>
  );
}

export default App;
