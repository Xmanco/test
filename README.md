# Test Psicométrico Normalitec

Aplicación web desarrollada con React/TypeScript para realizar tests psicométricos con dos secciones distintas de preguntas A/B. 

## Características

- Test psicométrico con dos partes diferentes
- Recolección de datos personales (nombre, edad, sexo)
- Selección mediante botones de radio para las opciones A y B
- Cálculo automático de puntajes sin mostrarlos al usuario
- Almacenamiento de resultados en base de datos Supabase

## Tecnologías

- React + TypeScript
- Vite
- Tailwind CSS y shadcn/ui
- Express
- Supabase para almacenamiento

## Configuración

Para ejecutar el proyecto es necesario configurar las siguientes variables de entorno:

```
SUPABASE_URL=url_de_tu_proyecto_supabase
SUPABASE_ANON_KEY=clave_anonima_de_supabase
```

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

## Estructura de datos

Los resultados se almacenan en Supabase con la siguiente estructura:

```typescript
{
  informacion_personal: {
    nombre: string;
    edad: string;
    sexo: string;
    createdAt: string;
  },
  parte1: {
    respuestas: (string | null)[];
    scoreA: number;
    scoreB: number;
  },
  parte2: {
    respuestas: (string | null)[];
    scoreA: number;
    scoreB: number;
  }
}
```

## Desarrollo

Desarrollado por Normalitec - 2025