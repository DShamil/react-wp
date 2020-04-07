import React from 'react';
import Locations from './components/Locations';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container'
import Attractions from './components/attractions';

function App() {
  return (
    <div className="App">
    <Container>
      <h1>Destinations</h1>
      <Locations/>
      <hr/>
      <h1>Attractions</h1>
      <Attractions/>
    </Container>
    </div>
  );
}

export default App;
