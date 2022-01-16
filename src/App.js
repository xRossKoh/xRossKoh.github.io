import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my website!
        </p>
        <p>
          I don't really know what I am doing here
        </p>
        <button className='btn btn-secondary'>
          Click here!
        </button>
      </header>
    </div>
  );
}

export default App;
