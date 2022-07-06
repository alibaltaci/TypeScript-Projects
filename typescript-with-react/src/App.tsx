import './App.css';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      Hello TypeScript With React 

      {/* <Hello name = {"Ali"} /> */}
      {/* <Hello name = {"Ali"} onSmthHappen= {(name) => {console.log(name)}} /> */}

      <Hello />

    </div>
  );
}

export default App;
