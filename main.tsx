// main.tsx
import './styles.css'; // Importa tus estilos globales si los tienes
import { render } from 'solid-js/web';
import App from './App';

const rootElement = document.getElementById('app');

if (rootElement) {
    render(() => <App />, rootElement); // Renderiza tu componente principal
}
