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

1. Asi importas los hooks de RHF. 
```js
const { register, handleSubmit, formState } = useForm({ defaultValues: { title: '' } });
```

2. Registrar inputs (sin useState por campo):

```js
<input {...register('title', { required: 'Requerido' })} />
```

3. Manejar submit:

```js
<form onSubmit={handleSubmit(data => onSave(data))}></form>
```

4. Mostrar errores:

```js
{formState.errors.title && <span>{formState.errors.title.message}</span>}
```

5. Manipulación programática:

```js
reset(values); // recarga valores
setValue('title', 'nuevo');
const all = getValues();
```

6. Inputs controlados / terceros (usar Controller):

```js
<Controller name="prio" control={control} render={({ field }) => <Select {...field} />} />
```


## Que es Zod ? 

Zod es un framework de declaracion y validacion de esquemas. Resumido te permite definir como deben ser tus datos ( en un schema ) y luego validar que los datos reales coinciden. 

>[!note] Ojo! 
> Validar funciona correctamente, pero zod puede no llegar a sanitizar todo por completo, es mejor sanitizar antes de enviar los datos al servidor.

## Instalar

```bash
npm install react-hook-form zod @hookform/resolvers
```

## Conceptos clave (rapido)

- Schema básico: z.string(), z.number(), z.object({...}), z.array(...)
- Transformaciones: .transform()
- Refinamientos personalizados: .refine()
- Preprocesos: z.preprocess()
- Parsing:
  - parse(value) → devuelve dato validado o lanza ZodError
  - safeParse(value) → devuelve { success: true, data } o { success: false, error }
  - parseAsync / safeParseAsync para validadores async

### Ejemplos pequeños

- Schema básico:

``` js
import { z } from 'zod'

const TaskSchema = z.object({
  title: z.string().min(1, 'Título requerido').max(120),
  notes: z.string().optional(),
  completed: z.boolean().default(false),
  priority: z.enum(['low', 'medium', 'high']).default('medium'),
});
```


- uso con React Hook Form (JS)

```js
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// TaskSchema definido arriba

function MyForm() {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(TaskSchema),
    defaultValues: { title: '', notes: '' }
  });

  const onSubmit = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title')} />
      {formState.errors.title && <span>{formState.errors.title.message}</span>}
      <button type="submit">Enviar</button>
    </form>
  );
}
```

