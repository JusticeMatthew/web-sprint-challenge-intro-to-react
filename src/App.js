import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components';
import CharacterAccordion from './components/Character';
import { BASE_URL, PAGE } from './constants';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [charData, setCharData] = useState([]);

  useEffect(() => {
    for (let i = 1; i < 10; i++) {
      axios
        .get(BASE_URL + PAGE + i)
        .then((res) => {
          setCharData((charData) => charData.concat(res.data.results));
        })
        .catch((err) => console.log('Error: ' + err));
    }
  }, []);

  return (
    <div className='App'>
      <h1 className='Header'>Star Wars Characters</h1>
      <CharacterAccordion results={charData} />
    </div>
  );
};

export default App;
