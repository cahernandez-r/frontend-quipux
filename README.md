# Prerrequisitos
Asegúrate de tener los siguientes programas instalados en tu máquina:

### Docker

Si no tienes Docker, puedes instalarlo siguiendo las instrucciones oficiales en docker.com.
### Git
Si aún no tienes Git instalado, puedes obtenerlo desde git-scm.com.
Pasos para ejecutar la aplicación con Docker

## 1. Clonar el repositorio
Primero, clona el repositorio en tu máquina local:

git clone <URL_DEL_REPOSITORIO>
Navega al directorio del proyecto:

cd <nombre-del-proyecto>
## 2. Crear la imagen Docker
El proyecto ya incluye un archivo Dockerfile configurado para construir y ejecutar la aplicación. Para crear la imagen Docker, ejecuta el siguiente comando dentro del directorio del proyecto:

docker build -t angular-playlist-app .
Este comando construirá la imagen Docker usando el Dockerfile que ya está presente en el proyecto. El nombre de la imagen será angular-playlist-app, pero puedes cambiarlo si lo prefieres.

## 3. Ejecutar el contenedor Docker
Una vez que la imagen se haya construido con éxito, puedes ejecutar un contenedor para poner en marcha la aplicación:

Editar
##### docker run -p 8080:80 angular-playlist-app
Este comando ejecutará el contenedor y expondrá la aplicación en el puerto 8080 de tu máquina local. Ahora, puedes acceder a la aplicación en tu navegador a través de la siguiente URL:

#####  http://localhost:8080

## 4. Verificar la aplicación en el navegador
Abre tu navegador y ve a la dirección http://localhost:8080. Deberías poder ver la aplicación Angular funcionando dentro del contenedor Docker.

## Resumen de los comandos
Clonar el repositorio:

git clone <URL_DEL_REPOSITORIO>
Construir la imagen Docker:

docker build -t angular-playlist-app .
Ejecutar el contenedor:

##### docker run -p 8080:80 angular-playlist-app
Notas adicionales
El proyecto ya tiene configurado el archivo Dockerfile, por lo que solo necesitas seguir los pasos anteriores para crear la imagen y ejecutar el contenedor.
Si necesitas hacer cambios en la aplicación, puedes editarlos en el código fuente, reconstruir la imagen Docker y ejecutar nuevamente el contenedor.
¡Eso es todo! Con estos pasos deberías poder ejecutar la aplicación Angular en Docker sin problemas. Si encuentras algún inconveniente, no dudes en revisar los logs de Docker o los archivos de configuración en el proyecto.
