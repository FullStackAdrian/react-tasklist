# Setup — Crear e instalar todo lo necesario

Este documento describe, paso a paso, cómo montar este proyecto con Vite y añadir Tailwind, React Hook Form, Zod y el resolver.

*He decidido dejar cosas como la configuracion necesaria de tailwind, o como crear un proyecto con vite para que puedas ver como se configura pero realmente no es necesario para poner el proyecto en funconamiento.*

**Requisitos previos**
- Node.js >= 22
- npm 

**Resumen de los pasos**

1. Crear el proyecto Vite + instalar React Hook Form, Zod y el resolver.  
2. Instalar Tailwind y el plugin para Vite.  
3. Configurar Vite/Tailwind, importar estilos, y arrancar el servidor (configuración y uso).


## 1 Crear el proyecto Vite + instalar Zod y React Hook Form

Crear el proyecto (elige React y JavaScript cuando Vite pregunte la plantilla):

```bash
npm create vite@latest my-project
cd my-project
```

```bash
npm create vite@latest my-project -- --template react
cd my-project
```

Instalar dependencias para formularios y validación (React Hook Form + Zod + resolver):

```bash
npm install react-hook-form zod @hookform/resolvers
```



## 2 Instalar Tailwind (plugin para Vite)

Instalar Tailwind y el plugin para Vite:

```bash
npm install tailwindcss @tailwindcss/vite
```

Notas:
- El plugin ayuda a integrar Tailwind con la compilación de Vite.
- También puedes instalar plugins opcionales de Tailwind como `@tailwindcss/forms` si los necesitas:
  ```bash
  npm install -D @tailwindcss/forms
  ```



## 3 Configurar Vite y Tailwind, importar estilos, iniciar servidor

3.1 Inicializar configuración de Tailwind (genera `tailwind.config.js`):

Recomendado (crea también postcss config si lo necesitas):
```bash
npx tailwindcss init -p
```
(Opcional: si prefieres tu forma, `npx tailwind init` crea solo `tailwind.config.js`.)

3.2 Añadir el plugin de Tailwind a `vite.config.js`

Crea o edita `vite.config.js` en la raíz del proyecto:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

Qué hace:
- Añade `tailwindcss()` al array de plugins para que Vite procese correctamente Tailwind.

3.3 Configurar `tailwind.config.js`

Asegúrate de que `content` incluya tus archivos JSX para purgar clases no usadas:

```js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms') // opcional
  ],
}
```

3.4 Importar Tailwind en tu CSS principal

Yo prefiero importar en `src/App.css` (más limpio que en index). En `src/App.css` añade:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

(Otra opción compatible: `@import "tailwindcss";` — pero las tres directivas anteriores son la forma recomendada.)

Asegúrate de que `App.css` esté importado en `App.jsx`:
```js
import './App.css'
```

3.5 Scripts y arrancar el servidor

Instaladas las dependencias, arranca el servidor de desarrollo:

```bash
npm install
npm run dev
```

Comandos útiles:
- `npm run dev` — servidor de desarrollo (Vite).
- `npm run build` — build para producción.
- `npm run preview` — preview del build.



## Integración rápida: React Hook Form + Zod (pequeño recordatorio)

En el formulario usa el `zodResolver` para delegar la validación a Zod. Ejemplo mínimo (fragmento JS):

```js
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// schema (ejemplo)
const TaskSchema = z.object({
  title: z.string().min(1, 'Título requerido'),
  notes: z.string().optional(),
})

// en tu componente / hook de formulario
const { register, handleSubmit, formState } = useForm({
  resolver: zodResolver(TaskSchema),
  defaultValues: { title: '', notes: '' }
})
```

Dónde ubicar la lógica del formulario:
- Extrae la lógica a un hook dentro de la feature:
  - `features/TaskList/hooks/useTaskForm.jsx` (useForm + submit + reset)
- Coloca el schema en `features/TaskList/schema/taskFormSchema.jsx`.

