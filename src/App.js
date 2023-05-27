// import logo from './logo.svg';
import './App.css';
import Home from './home';
import Nav from './nav';
import Work from './work';
import Contact from './contact';
function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Home />
        <Work />
        <Contact />
      </main>
    </div>
  );
}

export default App;
