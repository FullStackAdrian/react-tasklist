## Qué es React Hook Form?

React Hook Form es una librería para gestionar los formularios en react de manera mas eficiente y limpia.  *En resumen:*

>[!tip] Te facilita: 
>1. **Manejar el estado del formulario por ti** - No necesitas usar `useState` para cada campo.
>2. **Validar los campos fácilmente** - Con reglas simples en `register()`.
>3. **Mejor performance** - Menos re-renders que con `useState`.
>4. **Manejar errores** - Los errores se muestran cuando hay validación fallida.

###### Como lo hace para ser mas eficiente ? 
_Gracias a que no usa el hook `useState` para los formularios._
#### Como lo hace? 

React hook forms evita esto usando referencias a el valor introducido en el campo de manera directa desde el **DOM**. 
Capturando el valor únicamente cuando es necesario. *(ej: validacion , submit... )* sin forzar el innecesario rerender.

#### Pero por que eso lo hace mas eficiente? 

***Primero hay que entender que hace useState.*** 

Cuando una variable que usa `useState` cambia de estado, react **rerenderiza** el *componente que usa el hook*, de manera que si usas `useState` para el formulario, ***por cada cambio de estado de un campo rerenderizas el formulario entero***. 

Solo con explicar eso se entiende lo ineficiente que es manejar un form con `useState` .

## Instalar

Se puede instalar con npm install :

```bash
npm install react-hook-form
```

## Como se usa? 

RHF hace uso de 3 metodos importantes para gestionar el uso de este. 

> register, handleSubmit, formState 

- register se le pasa al input en ultima instancia, sirve para obtener los datos de los campos input, y ponerle nombre al dato obtenido dentro del objeto respuesta del formulario, ademas de para validarlos . 
- handleSubmit se encarga  de la entrega del formulario, de lo que este hara, cancelar comportamiento por defecto validar, llamar a el callback final. 
- formState refleja el estado derivado del formulario como: errors, isDirty, dirtyFields, touchedFields, y muchos mas véase la documentación para verlos todos.

A continuación unos casos de uso como ejemplo basico. 

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



>[!note] **Notas rápidas**
>- En JS no usas `z.infer` (es TypeScript). Simplemente parseas y accedes a los datos validados.
>- Para APIs/servicios prefieres `safeParse` y manejar errores sin lanzar excepciones.
>- Usa `.preprocess()` para normalizar strings/fechas/números antes de validar.
>- Para seguridad, complementa Zod con sanitización adicional donde haga falta (escape HTML, trim, etc.).
