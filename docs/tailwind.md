##  Tailwind CSS  

##### ¿Qué es el CSS atómico?

Antes de adentrarnos en Tailwind CSS, vamos a entender qué es Atomic CSS. Según [CSS Tricks](https://css-tricks.com/lets-define-exactly-atomic-css/)

> [!note]
> *__"__CSS atómico es el enfoque de la arquitectura CSS que favorece las clases pequeñas y de propósito único con nombres basados en la función visual.__"__*

Es como hacer clases que se *supone* que tienen un único propósito. Por ejemplo, hagamos una clase `bg-blue` con el siguiente CSS:

```css
.bg-blue {
  background-color: rgb(81, 191, 255);
}

```

Esta clase si se queda asi seguiria la arquitectura que favorece las clases pequeñas y de proposito unico. 

**Una clase unicamente tiene el css para lo que su nombre indica que va ha hacer.**


###  ¿Qué es Tailwind?

**Tailwind es una librería de estilos que te permite separar y agilizar el diseño web .**

Según su propio sitio web, es un "framework CSS que prioriza las utilidades" que proporciona varias de estas clases de utilidades de un solo propósito que puedes utilizar directamente dentro de tu marcado para diseñar un elemento.

### Como se usa ? 

Tailwind es como bootstrap la manera de aprender usarlo es leer la documentacion para ver que hace cada clase y prueba y error hasta que te sientas comodo con el framework a la hora de aplicar las clases .


Ejemplo simple:

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/src/style.css" rel="stylesheet">
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </body>
</html>
```
