import React from 'react';
import './App.css';
import Header from './components/Header';
import TalksSection from './components/TalksSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TalksSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;