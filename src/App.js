import Hero from './components/hero';
import Nav from './components/navbar';
import Pricing from './components/pricing';
import Team from './components/team';
import Testimonials from './components/testimonial';
import Work from './components/whatWeDo';
import './styles/app.css'


function App() {
  
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Work />
      <Pricing />
      <Team />
      <Testimonials />
    </div>
  );
}

export default App;
