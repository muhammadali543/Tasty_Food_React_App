import React from 'react';
import './App.scss';
import Food from './FoodComponent/Food';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './FoodComponent/Footer';
function App() {
  return (
    <div>
      <Food/>
      <Footer/>
    </div>
  );
}

export default App;
