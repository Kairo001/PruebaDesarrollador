# Prueba Desarrollador
Este es un proyecto fullstack el cual tiene como propósito la implementación de un CRUD.
## Backend
Para el desarrollo del backend de este trabajo, se usa el entorno de Nodejs usando el lenguaje de programación Javascript y como gestor de base de datos sql se usa mysql. Se crean 4 rutas diferentes la cuales tienen los siguientes propósitos:
- **GET /api/users**: Esta ruta consulta la tabla de usuarios obteniendo el registro correspondiente al número de control extraido de los parámetros del mensaje.
- **POST /api/users**: Esta ruta crea un nuevo registro en la tabla por medio de los datos recibidos en el cuerpo del mensaje.
- **PUT /api/users**: Esta ruta actualiza un registro de la tabla correspondiente al número de control obtenido de los parámetros del mensaje, usando los datos recibidos en el cuerpo del mensaje.
- **DELETE /api/users**: Esta ruta elimana el registro correspondiente al número de control obtenido en los parámetros del mensaje.
## Frontend
Para el desarrollo del fronent de este trabajo, se utiliza el framework Angular creando 2 diferentes vistas:
1. **Primera vista:** Un formulario con los siguientes campos de información:
> - El nombre, con un control de tipo texto.
> - Los apellidos, con un control de tipo texto.
> - El correo electrónico, con un control de tipo email.
> - Un número de control, con un control de tipo numérico.
> - Una casilla de verificación con el texto "Declaro haber leído y aceptar las condiciones generales del programa y la normativa sobre protección de datos".
> - Un botón de envío.

![Image text](https://github.com/Kairo001/PruebaDesarrollador/blob/main/vistas/Vista1.png)
2. **Segunda vista:** Una página que permita consultar, actualizar y eliminar la información registrada en el formulario.
![Image text](https://github.com/Kairo001/PruebaDesarrollador/blob/main/vistas/Vista2.png)
