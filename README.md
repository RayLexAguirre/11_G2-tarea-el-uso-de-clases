![Points badge](../../blob/badges/.github/badges/points.svg)

![Logo UCOL](img/ucol-logo.jpg)

![Portada](img/cover.jpg)
> Park and National Palace of Pena, Sintra, Portugal
Sintra Pena Palace Garden. Photo by <a href="https://unsplash.com/@zoltantasi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Zoltan Tasi</a> on <a href="https://unsplash.com/t/history?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
# Tarea: Uso de clases

El objetivo de este ejercicio es practicar el uso de clases para:

- Reutilización de código
- Creación de _nuevos tipos de datos_.

## Requerimientos funcionales

1. (19 Puntos) Programar la clase `Amount` la cual sirve para representar un número entero con valor entre 0 y 10. Deberá incluir los siguientes:
   - Atributos:
     - `Number value`  es el valor que tiene esta cantidad.
   - Métodos
     - `constructor()` recibe el valor inicial para `value`. Debe ser un valor entre 0 y 10. En caso de que sea otro valor en automático se asignara cero.
     - `getValue()` regresa el valor de `value`.
     - `getValueAsString()` regresa el nombre que corresponde a ese valor. Por ejemplo, cero para 0, uno para 1, dos para 2 y así sucesivamente.

2. (18 puntos) Programar la clase `Product`. Deberá incluir los siguientes:
   - Atributos:
     - `String name` nombre del producto: Por ejemplo: Computadora
     - `Number price` costo de este producto en pesos. Por ejemplo: 200
   - Métodos
     - `constructor()` recibe valores iniciales para  `name` y `price`
     - `getName()` regresa nombre del producto.
     - `getPrice()` regresa el `price` del producto.

3. (36 puntos) Programar la clase `Item`. Deberá incluir los siguientes:
   - Atributos:
     - `Product product` producto a utilizar como ingrediente.
     - `Amount amount` cantidad requerida de este producto.
   - Métodos
     - `constructor()` recibe valores iniciales para `product` y `amount`.
     - `getName()` regresa el nombre del producto
     - `getAmount()` regresa la cantidad como valor numérico.
     - `getAmountAsString()` regresa el nombre que corresponde a ese valor. Por ejemplo, cero para 0, uno para 1, dos para 2 y así sucesivamente.
     - `getPrice()` regresa el precio individual de este producto.
     - `getTotalPrice()` regresa el precio total para este item, es decir el resultado de multiplicar el valor de `amount` por el valor de `price`.

4. (27 puntos) Programar la clase `Cart`. Deberá incluir los siguientes:
   - Atributos:
     - `Item items[]` vector que contiene todos los `items` que se han agregado a esta carrito de compras..
   - Métodos
     - `constructor()` inicializa el vector `items`.
     - `addItem(item)` si el producto que contiene el item no está en en el vector `items` se agrega como nuevo, pero si ya existe se reemplaza. Se puede decir que dos items son el mismo si utilizan el mismo nombre de producto.
     - `getNumberOfItems()` regresa el número total de items que se han agregado, este valor es independiente del número de productos que se solicitan en cada item.
     - `getNumberOfProducts()` regresa el número total productos que se han agregado en este carrito de compras. Importante considerar que un item puede tener 0, 1 o más productos, esto está determinado por `amount` en la clase item.
     - `getCost()` regresa el costo total de la suma de todos los items.
     - `getMostExpensive()` regresa el nombre del producto más caro que se ha agregado a este carrito.

## Requerimientos no funcionales

- Las clases, métodos y atributos deberán tener el nómbre que se indica y el número y tipo de parámetros que se especifica.
- Se deberán utilizar las convenciones de estilo para clases, métodos, atributos, parámetros y variables
- El programa deberá probar y mostrar el correcto funcionamiento de las funciones.
- El programa deberá funcionar en consola

## Entregable

- Código fuente en este repositorio
  
## Evaluación

- Para que el examen sea considerado como válido, el repositorio deberá tener por lo menos 1 commit por cada método.
- Los repositorios que no tengan una historia de commits considerable NO serán considerados como válidos y tendrán calificación cero
