import React from 'react';
import { nanoid } from 'nanoid';

import { ReactComponent as World } from './assets/world.svg';
import './App.css';
import TravelCard from './components/TravelCard';
import cardData from './data';


function App() {
  const travelCards = cardData.map((card) => <TravelCard key={nanoid()} {...card} />);

  return (
    <div className="App">
      <header>
        <World /> <div>my travel journal.</div>
      </header>
      <main>
        {travelCards}
      </main>
    </div>
  );
}

export default App;
