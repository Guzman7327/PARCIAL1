// AgregarTema.tsx
import { createSignal } from 'solid-js';
import { agregarTema } from './temaservice';
import { Tema } from './tema';

const AgregarTema = () => {
    const [titulo, setTitulo] = createSignal('');
    const [descripcion, setDescripcion] = createSignal('');

    const manejarEnvio = (e: Event) => {
        e.preventDefault();

        const nuevoTema: Tema = {
            id: Math.random(), // Genera un ID único para el tema
            titulo: titulo(),
            descripcion: descripcion(),
        };

        agregarTema(nuevoTema);
        
        // Limpiar campos
        setTitulo('');
        setDescripcion('');
    };

    return (
        <form onSubmit={manejarEnvio}>
            <input
                type="text"
                placeholder="Título"
                value={titulo()}
                onInput={(e) => setTitulo(e.currentTarget.value)}
            />
            <textarea
                placeholder="Descripción"
                value={descripcion()}
                onInput={(e) => setDescripcion(e.currentTarget.value)}
            />
            <button type="submit">Agregar Tema</button>
        </form>
    );
};

export default AgregarTema;
