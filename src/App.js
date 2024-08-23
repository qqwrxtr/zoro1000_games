import Navbar from './components/Navbar/Navbar';
import './App.css';
import Banner from './components/Banner/Banner';
import Games from './components/GamesFolder/GamesLay.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Banner/>
        <Games/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
