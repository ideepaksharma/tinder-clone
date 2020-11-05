import React from 'react';
import './App.css';

import Header from './com/app/header/Header';
import TinderCards from './com/app/body/TinderCards';
import SwipeButtons from './com/app/footer/SwipeButtons'

function App() {
  return (
    <div className="app">

      <Header />
      <TinderCards />
      <SwipeButtons />

    </div>
  );
}

export default App;
