import Hero from './components/hero';
import Nav from './components/navbar';
import Work from './components/whatWeDo';
import './styles/app.css'


function App() {
  
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Work />
    </div>
  );
}

export default App;
