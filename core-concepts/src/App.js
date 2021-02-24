import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <h1>My first React work</h1>
     <Person></Person>
      </header>
    </div>
  );
}
function Person() {
  const personStyle = {
    border: '2px solid red',
     margin:'50px',
      padding:'20px'
  }
  return (
    <div style = {personStyle}>
      <h1>Name: Riderkiller4</h1>
      <h3>Hero of the year</h3>
      </div>
  )
}

export default App;
