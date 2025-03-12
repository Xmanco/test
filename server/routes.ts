import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEvaluacionSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import { randomUUID } from "crypto";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint para guardar evaluaciones en Supabase
  app.post("/api/evaluaciones", async (req, res) => {
    try {
      // Generar un session_id aleatorio si no se proporciona
      const session_id = req.body.session_id || randomUUID();
      
      // Validar los datos recibidos
      const evaluacionData = insertEvaluacionSchema.parse({
        ...req.body,
        session_id
      });
      
      // Guardar la evaluación
      const savedResult = await storage.saveEvaluacion(evaluacionData);
      res.status(201).json(savedResult);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        console.error("Error al guardar evaluación:", error);
        res.status(500).json({ message: "Error al guardar la evaluación" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
