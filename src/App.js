import './App.css';
import Vaso from './components/Vaso';

function App() {
  let vasos = [1,2,3,4,5,6,7,8]
  return (
    <div className="App">
      <h1>Registra tu water intake con tu hydrohomie</h1>
      <div className='vasos-container'>
        {vasos.map((i)=> (
          <Vaso key={i}/>
        ))}
      </div>
    </div>
  );
}

export default App;
