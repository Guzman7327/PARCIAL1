// temaService.ts
import { Tema } from './tema';

export function agregarTema(nuevoTema: Tema): void {
    // Lógica para agregar el tema
    console.log(`Tema agregado: ${nuevoTema.titulo}`);
}
// src/temaService.ts
import { supabase } from './supabaseClient';
import { Tema } from './tema';

// Obtener todos los temas
export const obtenerTemas = async (): Promise<{ data: Tema[] | null; error: any }> => {
    const { data, error } = await supabase
        .from('Tema')
        .select('*');

    if (error) {
        console.error('Error al obtener los temas:', error);
    }

    return { data, error };
};

// Agregar un nuevo tema
export const agregarTema = async (nuevoTema: Tema): Promise<{ data: Tema[] | null; error: any }> => {
    const { data, error } = await supabase
        .from('Tema')
        .insert([nuevoTema]);

    if (error) {
        console.error('Error al agregar el tema:', error);
    }

    return { data, error };
};

// Actualizar un tema
export const actualizarTema = async (id: number, nuevosDatos: Partial<Tema>): Promise<{ data: Tema[] | null; error: any }> => {
    const { data, error } = await supabase
        .from('Tema')
        .update(nuevosDatos)
        .eq('id', id);

    if (error) {
        console.error('Error al actualizar el tema:', error);
    }

    return { data, error };
};

// Eliminar un tema
export const eliminarTema = async (id: number): Promise<{ data: Tema[] | null; error: any }> => {
    const { data, error } = await supabase
        .from('Tema')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error al eliminar el tema:', error);
    }

    return { data, error };
};
