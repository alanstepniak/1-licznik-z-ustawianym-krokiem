import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1 className='appTitle'>Counter App in React JS</h1>
      </header>
      <Counter initValue={10}/>
    </div>
  );
}

export default App;
