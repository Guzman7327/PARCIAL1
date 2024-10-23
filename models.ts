// src/models.ts

export interface Carrera {
    id: number;
    nombre: string;
}

export interface Tema {
    id: number;
    nombre: string;
    carreraId: number; // Relación con Carrera
}
