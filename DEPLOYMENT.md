# Guía de Despliegue

Este documento proporciona instrucciones para desplegar el Test Psicométrico Normalitec en diferentes plataformas.

## Requisitos previos

1. Node.js 18 o superior
2. Cuenta en Supabase
3. Variables de entorno configuradas
4. Git instalado

## Configuración de Supabase

1. Crea un nuevo proyecto en [Supabase](https://supabase.com)
2. Crea una tabla `evaluaciones` en tu base de datos con la siguiente estructura:
   - `id`: UUID (Primary Key)
   - `session_id`: UUID
   - `informacion_personal`: JSONB
   - `parte1`: JSONB
   - `parte2`: JSONB
   - `created_at`: TIMESTAMP WITH TIME ZONE

3. Configura las variables de entorno con tu URL y clave anónima de Supabase

## Despliegue en GitHub Pages

1. Asegúrate de tener un repositorio Git inicializado y todos los cambios confirmados.

2. Modifica el archivo `vite.config.ts` para configurar la base URL para GitHub Pages:
   ```typescript
   // vite.config.ts
   export default defineConfig({
     // ... otras configuraciones
     base: '/nombre-del-repositorio/', // Reemplaza con el nombre de tu repositorio
     // ...
   });
   ```

3. Instala el paquete gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

4. Agrega scripts de despliegue a `package.json`:
   ```json
   "scripts": {
     // ... otros scripts
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

5. Ejecuta el comando de despliegue:
   ```bash
   npm run deploy
   ```

6. Configura GitHub Pages en la configuración de tu repositorio para usar la rama `gh-pages`.

## Despliegue en Vercel

1. Crea una cuenta en [Vercel](https://vercel.com) si aún no tienes una.

2. Instala la CLI de Vercel:
   ```bash
   npm install -g vercel
   ```

3. Inicia sesión en Vercel:
   ```bash
   vercel login
   ```

4. Configura las variables de entorno en Vercel:
   - SUPABASE_URL
   - SUPABASE_ANON_KEY

5. Despliega el proyecto:
   ```bash
   vercel
   ```

6. Para producción:
   ```bash
   vercel --prod
   ```

## Consideraciones importantes

1. **Variables de entorno**: Asegúrate de configurar correctamente las variables de entorno en el entorno de producción.

2. **CORS**: Si estás desplegando el frontend y backend por separado, deberás configurar CORS adecuadamente.

3. **Seguridad en Supabase**: Configura las políticas RLS (Row Level Security) en Supabase para proteger tus datos.

4. **Pruebas**: Realiza pruebas completas en el entorno de producción después del despliegue.

## Problemas comunes

1. **Error de CORS**: Si experimentas errores de CORS, verifica la configuración de tu servidor y asegúrate de que esté permitiendo solicitudes desde el dominio donde está alojado tu frontend.

2. **Variables de entorno no disponibles**: Verifica que las variables de entorno estén correctamente configuradas en tu plataforma de despliegue.

3. **Error de conexión a Supabase**: Asegúrate de que las credenciales de Supabase sean correctas y que tengas permisos adecuados.