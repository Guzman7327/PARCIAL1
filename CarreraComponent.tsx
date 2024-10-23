import { obtenerCarreras, agregarCarrera, actualizarCarrera, eliminarCarrera } from './carreraService';
import { createSignal, onMount } from 'solid-js';

const CarreraComponent = () => {
    const [carreras, setCarreras] = createSignal<Carrera[]>([]);

    // Obtener carreras al montar el componente
    onMount(async () => {
        const { data, error } = await obtenerCarreras();
        if (data) setCarreras(data);
    });

    // Función para agregar una nueva carrera
    const manejarAgregarCarrera = async () => {
        const nuevaCarrera = { id: Math.random(), nombre: 'Nueva Carrera', descripcion: 'Descripción de la carrera' };
        const { data, error } = await agregarCarrera(nuevaCarrera);
        if (data) setCarreras([...carreras(), ...data]);
    };

    // Función para actualizar una carrera
    const manejarActualizarCarrera = async (id: number) => {
        const nuevosDatos = { nombre: 'Carrera Actualizada' };
        const { data, error } = await actualizarCarrera(id, nuevosDatos);
        if (data) {
            const carrerasActualizadas = carreras().map(carrera => carrera.id === id ? { ...carrera, ...nuevosDatos } : carrera);
            setCarreras(carrerasActualizadas);
        }
    };

    // Función para eliminar una carrera
    const manejarEliminarCarrera = async (id: number) => {
        const { data, error } = await eliminarCarrera(id);
        if (data) {
            const carrerasFiltradas = carreras().filter(carrera => carrera.id !== id);
            setCarreras(carrerasFiltradas);
        }
    };

    return (
        <div>
            <button onClick={manejarAgregarCarrera}>Agregar Carrera</button>
            <ul>
                {carreras().map(carrera => (
                    <li key={carrera.id}>
                        {carrera.nombre} - {carrera.descripcion}
                        <button onClick={() => manejarActualizarCarrera(carrera.id)}>Actualizar</button>
                        <button onClick={() => manejarEliminarCarrera(carrera.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarreraComponent;
