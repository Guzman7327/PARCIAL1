import './App.css';
import { render } from 'solid-js/web';
import MyComponent from "./components/MyComponent";
const rootElement = document.getElementById('app');
if (rootElement) {
    render(() => <App />, rootElement);
}
// src/App.tsx

  // Importa tu componente

function App() {
  return (
    <div>
      <h1>App con Firebase y Firestore</h1>
      <MyComponent />  {/* Renderiza el componente que interactúa con Firestore */}
    </div>
  );
}

export default App;
