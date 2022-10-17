import './App.css';
import Logo from "./components/Logo.js"
import ListaDeTareas from "./components/ListaDeTareas.js"

function App() {
  return (
    <div className="App">
      <Logo />

      <div className="tareas__lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
