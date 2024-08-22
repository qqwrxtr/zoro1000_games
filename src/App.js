import Navbar from './components/Navbar/Navbar';
import './App.css';
import Banner from './components/Banner/Banner';
import Games from './components/GamesFolder/GamesLay.jsx';

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
    </>
  );
}

export default App;
