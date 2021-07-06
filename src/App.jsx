import './App.css';
import About from './components/About';
import Ingredients from './components/Ingredients';
import Preparation from './components/Preparation';

function App() {
  return (
    <div className="App">
      <div className="wrapper-div">
        <div className="heading">
          <h1>EVERYDAY SESAME SLAW</h1>
        </div>
        <About />
        <Ingredients />
        <Preparation />
      </div>
      
      
    </div>
  );
}

export default App;
