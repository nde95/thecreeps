import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { CSSProperties } from './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import Card from './Card';
import { robots } from './robots'; 
import { getRandomRobot } from './robots.js';

const App = () => {
  const [cards, setCards] = useState([
    { id: 1, name: 'Robot 1', job: 'Developer' },
    { id: 2, name: 'Robot 2', job: 'Designer' },
    { id: 3, name: 'Robot 3', job: 'Manager' }
  ]);

  const generateRandomRobot = () => getRandomRobot();
  
  const shuffleCards = () => {
    const newCards = cards.map(card => {
      return {
        ...card,
        randomRobot: generateRandomRobot()
      };
    });
    setCards(newCards);
  }
  
  const addCard = () => {
    if (cards.length < 10) {
    const newCard = { id: cards.length + 1, name: 'Robot', job: 'Worker', randomRobot: generateRandomRobot() };
    setCards([...cards, newCard]);
    } else {
      alert('Too many creeps!');
    }
  }
  
  const deleteCard = (id) => {
    const updatedCards = cards.filter(card => card.id !== id);
    setCards(updatedCards);
  }
  
  return (
    <div className='tc'>
      <h1 className='f1'>The Creeps</h1>
      <button className='add' onClick={addCard}>Hire New Creep</button>
      <button className='add' onClick={shuffleCards}>Shuffle Creeps</button><br></br>
      {cards.map(card => (
        <Card key={card.id} id={card.id} name={card.name} job={card.job} randomRobot={card.randomRobot} onDelete={() => deleteCard(card.id)} />
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
