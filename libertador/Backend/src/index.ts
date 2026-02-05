import cors from "cors";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import express from "express";



dotenv.config(); // carga variables de entorno desde .env

const app = express();
const port = 4000;

// Middlewares
app.use(cors()); // permite que el frontend haga requests desde otro puerto
app.use(express.json()); // para poder leer JSON en req.body

// Cliente de Supabase
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

// Ruta POST para registrar usuarios
app.post("/registro", async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    if (!nombre || !email || !password) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    // Insertar usuario en Supabase
    const { data, error } = await supabase
      .from("uninstallrar")
      .insert([{ nombre, email, password }]); // En producción: hash del password

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(201).json(data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Ruta de prueba (opcional)
app.get("/", (req, res) => {
  res.send("Backend corriendo correctamente!");
});

// Levantar servidor
app.listen(port, () => {
  console.log(`Backend corriendo en http://localhost:4000`);
});
