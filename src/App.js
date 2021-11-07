import './App.css';
import HorarioSaida from './components/HorariosSaida';
import Menu from './components/Menu';
import TodasPassagens from './components/TodasPassagens';

function App() {
 

  return (
    <div className="App">

      <Menu/>
      <HorarioSaida/>
      <h1 className="Todas">Todas as nossas passagens</h1>
      <TodasPassagens/>
    </div>
  );
}

export default App;
