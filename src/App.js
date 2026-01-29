import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React logo" />

        <h1>Welcome to Rohit’s Frontend App 🚀</h1>

        <p>
          This React application is deployed using
          <strong> GitHub Actions</strong> and
          <strong> AWS Elastic Beanstalk</strong>.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
