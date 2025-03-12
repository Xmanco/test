import { users, type User, type InsertUser, type Evaluacion, type InsertEvaluacion } from "@shared/schema";
import { createClient } from "@supabase/supabase-js";

// Configuración del cliente Supabase
const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

// Interfaz para las operaciones de almacenamiento
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveEvaluacion(evaluacion: InsertEvaluacion): Promise<Evaluacion>;
}

// Implementación de almacenamiento en memoria para usuarios
// y conexión a Supabase para evaluaciones
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  userCurrentId: number;

  constructor() {
    this.users = new Map();
    this.userCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Guardar evaluación en Supabase
  async saveEvaluacion(insertEvaluacion: InsertEvaluacion): Promise<Evaluacion> {
    // Insertar en la tabla 'evaluaciones' de Supabase
    const { data, error } = await supabase
      .from('evaluaciones')
      .insert([{
        session_id: insertEvaluacion.session_id,
        informacion_personal: insertEvaluacion.informacion_personal,
        parte1: insertEvaluacion.parte1,
        parte2: insertEvaluacion.parte2
      }])
      .select()
      .single();

    if (error) {
      console.error("Error al guardar en Supabase:", error);
      throw new Error(`Error al guardar evaluación: ${error.message}`);
    }

    return data as Evaluacion;
  }
}

export const storage = new MemStorage();
