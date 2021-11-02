# Cotizador seguro vehicular

- Aplicación para cotizar un seguro vehicular

## Atención

- En este proyecto se demouestra el acceso a las API para consumir un listado y/o la selección de un elemento, inclusive agregando cabeceras.
- Se simula un repositorio de clientes prospecto, de los cuales tenemos el numero de DNI, Nombres y Apellidos.
- el respositorio tiene registrado los números de DNI siguientes: 20202020, 30303030, 40404040.
## Procesamiento

- Se toma el DNI del formulario de inicio y se busca información en el repositorio de clientes prospecto.
- Se crea el estado global del cliente prospecto con información obtenida del respositorio y la información ingresada en el formulario.
- En la página **arma-tu-plan** se muestra la información obtenida desde el estado global del cliente prospecto (placa y nombre).
- Finalmente, se crea un nuevo estado global con la *suma asegurada* y la *cuota mensual* para que puedan ser utlizados en la página **gracias**.

### Librerias utilizadas
- Axios
- react-hook-form
- node-sass

### Hooks usados
- useState
- useEffect
- useContext

#### Observaciones
- Respecto a la página **arma-tu-plan** solo se está presentando la versión mmobil.
- Después de la entrega para su revisión seguimos trabajando la versión desktop.



