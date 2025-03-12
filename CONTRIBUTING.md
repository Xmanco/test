# Guía de Contribución

Gracias por tu interés en contribuir al proyecto Test Psicométrico Normalitec. A continuación, encontrarás las instrucciones para configurar el entorno de desarrollo y realizar contribuciones.

## Configuración del entorno de desarrollo

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/test-psicometrico-normalitec.git
cd test-psicometrico-normalitec
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
```
SUPABASE_URL=tu_url_de_supabase
SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## Estructura del proyecto

- `client/src/`: Código del frontend en React
  - `components/`: Componentes de UI
  - `pages/`: Páginas de la aplicación
  - `data/`: Datos para el test
  - `hooks/`: Hooks personalizados
  - `lib/`: Utilidades y configuración
- `server/`: Código del backend en Express
- `shared/`: Esquemas y tipos compartidos entre cliente y servidor

## Flujo de trabajo para contribuir

1. Crea una rama a partir de `main` para tu funcionalidad:
```bash
git checkout -b feature/nombre-de-tu-funcionalidad
```

2. Realiza tus cambios siguiendo las convenciones de código del proyecto.

3. Asegúrate de que el código funciona correctamente ejecutando la aplicación.

4. Haz commit de tus cambios:
```bash
git commit -m "Descripción clara de los cambios realizados"
```

5. Sube tus cambios a tu fork:
```bash
git push origin feature/nombre-de-tu-funcionalidad
```

6. Crea un Pull Request contra la rama `main` del repositorio original.

## Convenciones de código

- Utiliza TypeScript para todo el código.
- Sigue las convenciones de nomenclatura de camelCase para variables y funciones.
- Utiliza PascalCase para componentes React y nombres de tipos/interfaces.
- Mantén los componentes pequeños y focalizados en una sola responsabilidad.
- Documenta el código cuando sea necesario.

## Pruebas

Por el momento, el proyecto no tiene pruebas automatizadas configuradas. Antes de enviar una PR, asegúrate de probar manualmente todas las funcionalidades que has modificado.

## Contacto

Si tienes alguna pregunta o necesitas ayuda, por favor contacta al equipo de Normalitec.