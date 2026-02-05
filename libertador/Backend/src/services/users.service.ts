import { supabase } from "../lib/supabase";

export type User = {
  id: string;
  email: string;
  created_at: string;
};

/* Obtener todos los usuarios */
export async function getUsers() {
  return supabase
    .from("users")
    .select("*")
    .order("created_at", { ascending: false });
}

/* Obtener un usuario por id */
export async function getUserById(id: string) {
  return supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single();
}

/* Crear usuario */
export async function createUser(email: string) {
  return supabase
    .from("users")
    .insert({ email })
    .select()
    .single();
}

/* Actualizar usuario */
export async function updateUser(id: string, email: string) {
  return supabase
    .from("users")
    .update({ email })
    .eq("id", id)
    .select()
    .single();
}

/* Eliminar usuario */
export async function deleteUser(id: string) {
  return supabase
    .from("users")
    .delete()
    .eq("id", id);
}
