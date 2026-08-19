import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Platforms from './components/Platforms.jsx';
import Solutions from './components/Solutions.jsx';
import Industries from './components/Industries.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Platforms />
        <Solutions />
        <Industries />
      </main>
      <Footer />
    </div>
  );
}

export default App;

