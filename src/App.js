import React from 'react';
import './App.css';
// 引入Header、Hero组件
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
    return (
      <div className="App">
        <Header />
        <Hero />
      </div>
    );
}

export default App;