import { supabase } from './supabaseClient';
import { Carrera } from './carrera'; // Suponiendo que tienes la interfaz Carrera definida

// Obtener todas las carreras
export const obtenerCarreras = async (): Promise<{ data: Carrera[] | null; error: any }> => {
    const { data, error } = await supabase
        .from('Carrera')
        .select('*');

    if (error) {
        console.error('Error al obtener las carreras:', error);
    }

    return { data, error };
};

// Insertar una nueva carrera
export const agregarCarrera = async (nuevaCarrera: Carrera): Promise<{ data: Carrera[] | null; error: any }> => {
    const { data, error } = await supabase
        .from('Carrera')
        .insert([nuevaCarrera]);

    if (error) {
        console.error('Error al agregar la carrera:', error);
    }

    return { data, error };
};

// Actualizar una carrera
export const actualizarCarrera = async (id: number, nuevosDatos: Partial<Carrera>): Promise<{ data: Carrera[] | null; error: any }> => {
    const { data, error } = await supabase
        .from('Carrera')
        .update(nuevosDatos)
        .eq('id', id);

    if (error) {
        console.error('Error al actualizar la carrera:', error);
    }

    return { data, error };
};

// Eliminar una carrera
export const eliminarCarrera = async (id: number): Promise<{ data: Carrera[] | null; error: any }> => {
    const { data, error } = await supabase
        .from('Carrera')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error al eliminar la carrera:', error);
    }

    return { data, error };
};
