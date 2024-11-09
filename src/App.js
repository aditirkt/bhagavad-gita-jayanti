import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Highlights from './components/Highlights';
import Schedule from './components/Schedule';
import Sponsorship from './components/Sponsorship';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="bg-primary text-white text-center py-4">
        <h1>Bhagavad Gita Jayanti 2024</h1>
        <p>Join us at the Radha Krishna Temple in celebrating Bhagavad Gita Jayanti</p>
      </header>
      <main className="container my-5">
        <Highlights />
        <Schedule />
        <Sponsorship />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
