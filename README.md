# Backend de la App de Reservas de Restaurante

## Resumen del Proyecto
Este backend está construido con Node.js y Express, y se encarga de manejar la lógica del negocio para la aplicación de reservas de restaurante. Proporciona endpoints para la gestión de usuarios y reservas, interactuando con una base de datos MongoDB para almacenar la información.

## Tecnologías Usadas
- **Node.js**
- **Express.js**
- **MongoDB** (a través de Mongoose)

## Conexión a la Base de Datos
La conexión a MongoDB se realiza utilizando Mongoose. Aquí tienes el código que establece la conexión:

```javascript ```
const mongoose = require("mongoose");

// Función para conectar con MongoDB
const dbCon = async () => {
  // Realiza la conexión con la base de datos
  await mongoose.connect(
    "mongodb+srv://dcubillos12:w3Eqe9QDDrCcHOk3@prueba.ypvo5.mongodb.net/?retryWrites=true&w=majority",
  );
};

module.exports = dbCon;


Rutas API
El backend expone varias rutas para gestionar usuarios y reservas. A continuación se detallan las rutas disponibles:

Rutas de Usuarios
GET /users: Obtiene la lista de todos los usuarios.
Descripción: Retorna un array con todos los usuarios registrados en la base de datos.

POST /users: Crea un nuevo usuario.
Descripción: Se envían los datos del nuevo usuario en el cuerpo de la solicitud. Crea un usuario en la base de datos.

POST /users/login: Inicia sesión de un usuario.
Descripción: Se requieren las credenciales (email y contraseña) en el cuerpo de la solicitud. Si son correctas, se devuelve información del usuario.

GET /users/:id: Obtiene un usuario específico por su ID.
Descripción: Se valida el ID proporcionado y se retorna el usuario correspondiente.

PUT /users/addReserve: Agrega una reserva a un usuario.
Descripción: Se envían los datos de la reserva en el cuerpo de la solicitud, y se asocia con el usuario correspondiente.

Rutas de Reservas
GET /reserves: Obtiene la lista de todas las reservas.
Descripción: Retorna un array con todas las reservas registradas.

GET /reserves/:id: Obtiene una reserva específica por su ID.
Descripción: Se valida el ID proporcionado y se retorna la reserva correspondiente.

POST /reserves: Crea una nueva reserva.
Descripción: Se envían los datos de la nueva reserva en el cuerpo de la solicitud y se crea en la base de datos.

DELETE /reserves/:id: Elimina una reserva específica por su ID.
Descripción: Se valida el ID proporcionado y se elimina la reserva correspondiente de la base de datos.

PUT /reserves/:id: Actualiza una reserva específica por su ID.
Descripción: Se valida el ID y se envían los nuevos datos de la reserva en el cuerpo de la solicitud para actualizar la información.

Middleware
validateId: Middleware utilizado para validar que el ID proporcionado en las rutas sea correcto antes de realizar operaciones en los usuarios o reservas.

# Instalación
Requisitos Previos
Asegúrate de tener Node.js y MongoDB instalados en tu máquina.
Clonación del Repositorio
Clona el repositorio usando el siguiente comando:

```git clone https://github.com/tu-usuario/nombre-del-repositorio.git```
Instalación de Dependencias
Navega al directorio del proyecto
```cd nombre-del-repositorio```
Instala las dependencias:
```npm install```

# Ejecución del Backend
Inicia el servidor

```npm start```

El servidor estará corriendo en http://localhost:5000 (puedes ajustar el puerto en tu configuración).


# Muchas gracias por la oportunidad y me gustaria seguir con el proceso.🙂

