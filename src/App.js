import React from 'react';
import './App.css';
// 引入Header、Hero、Menu、Footer组件
import Header from './components/Header/Header'; //不加.js
import Hero from './components/Hero/Hero'; //不加.js
import Menu from './components/Menu/Menu'; //不加.js
import Footer from './components/Footer/Footer'; //不加.js

function App() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Menu />
        <Footer />
      </div>
    );
}

export default App;