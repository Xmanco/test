import { pgTable, text, serial, integer, boolean, jsonb, uuid, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Esquema para la tabla 'evaluaciones' según la estructura en Supabase
export const evaluaciones = pgTable("evaluaciones", {
  id: uuid("id").primaryKey().defaultRandom(),
  session_id: uuid("session_id").defaultRandom(),
  informacion_personal: jsonb("informacion_personal").notNull(),
  parte1: jsonb("parte1").notNull(),
  parte2: jsonb("parte2").notNull(),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow().notNull()
});

// Esquema para insertar evaluaciones
export const insertEvaluacionSchema = createInsertSchema(evaluaciones).omit({
  id: true,
  created_at: true
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertEvaluacion = z.infer<typeof insertEvaluacionSchema>;
export type Evaluacion = typeof evaluaciones.$inferSelect;
