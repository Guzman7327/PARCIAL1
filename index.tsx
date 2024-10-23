import { render } from 'solid-js/web';
import App from './App.tsx';

const root = document.getElementById('root');
if (root) {
    render(() => <App />, root);
} else {
    console.error('Elemento root no encontrado');
}

