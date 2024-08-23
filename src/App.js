import Navbar from './components/Navbar/Navbar';
import './App.css';
import Banner from './components/Banner/Banner';
import Games from './components/GamesFolder/GamesLay.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className='f-dflex flex-column justify-content-center align-items-center'>
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
    </div>
  );
}

export default App;
