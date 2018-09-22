# Prueba técnica 3 Astronautas

Prueba hecha por Juan David Robles Del Valle.

## Descripción de la prueba

El desarrollo de esta prueba técnica se realiza tomando como derrotero el [enunciado propuesto](https://drive.google.com/file/d/1XTIfpwExjEuXFrLnM1tXUZptEIwaNiok/view?usp=sharing)

El desarrollo de la prueba consiste en un proyecto de Angular 6 estructurado usando el Command Line Interface (CLI) oficial.

El proyecto está conformado por 3 rutas descritas a continuación.

### 1. /inicio (o /)

En esta ruta, se muestra la vista de fuselaje que contiene las vistas de motor y cabina.

### 2. /control

En esta ruta, se muestran el control de la nave espacial que consiste en la vista del motor y la cabina. Al presionar el botón de ignición (Ignite), comienza el conteo regresivo de 10 segundos visible en el módulo de cabina.

### 3. /planetas/[planeta]

En esta ruta, se muestran los datos relacionados al planeta ingresado en la ruta. El planeta ingresado se consulta en la respuesta obtenida al consumir el servicio http://demo0761779.mockable.io/angularspaceship/planets y en caso de estar en dicha respuesta, se muestran los grados de avistamiento y como fondo la imagen de dicho planeta.
