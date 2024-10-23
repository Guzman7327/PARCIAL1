import { obtenerTemas, agregarTema, actualizarTema, eliminarTema } from './temaService';
import { createSignal, onMount } from 'solid-js';

const TemaComponent = () => {
    const [temas, setTemas] = createSignal<Tema[]>([]);

    // Obtener temas al montar el componente
    onMount(async () => {
        const { data, error } = await obtenerTemas();
        if (data) setTemas(data);
    });

    // Función para agregar un nuevo tema
    const manejarAgregarTema = async () => {
        const nuevoTema = { id: Math.random(), titulo: 'Nuevo Tema', descripcion: 'Descripción del tema' };
        const { data, error } = await agregarTema(nuevoTema);
        if (data) setTemas([...temas(), ...data]);
    };

    // Función para actualizar un tema
    const manejarActualizarTema = async (id: number) => {
        const nuevosDatos = { titulo: 'Tema Actualizado' };
        const { data, error } = await actualizarTema(id, nuevosDatos);
        if (data) {
            const temasActualizados = temas().map(tema => tema.id === id ? { ...tema, ...nuevosDatos } : tema);
            setTemas(temasActualizados);
        }
    };

    // Función para eliminar un tema
    const manejarEliminarTema = async (id: number) => {
        const { data, error } = await eliminarTema(id);
        if (data) {
            const temasFiltrados = temas().filter(tema => tema.id !== id);
            setTemas(temasFiltrados);
        }
    };

    return (
        <div>
            <button onClick={manejarAgregarTema}>Agregar Tema</button>
            <ul>
                {temas().map(tema => (
                    <li key={tema.id}>
                        {tema.titulo} - {tema.descripcion}
                        <button onClick={() => manejarActualizarTema(tema.id)}>Actualizar</button>
                        <button onClick={() => manejarEliminarTema(tema.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TemaComponent;
