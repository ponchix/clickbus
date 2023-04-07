# Instrucciones
## Table of Contents
1. [Herramientas](#herramientas)
2. [Instalación](#instalación)
## Herramientas
>* Symfony
>* PHP 8.1
>* Laragon
>* Composer
>* Apache
>* Windows 10

## Instalación
***
Pasos 
```
===================================================
Instalar Laragon (opcional)
Descarga https://laragon.org/download/index.html
Ya viene con las dependencias necesarias para Symfony
====================================================
Descargar PHP 8.1 https://windows.php.net/download#php-8.1
** Descargar ZIP (Thread Safe)
===================================================
Cambiar de PHP 8 a 8.1 de Laragon
> Click en Menú
> PHP
> Version PHP X.X
> dir (dentro de esa carpeta se creará una nueva carpeta con el nombre del Zip (PHP 8.1))
> Extraer dentro de la nueva carpeta el Zip de PHP
> Click en Menú 
> PHP
> dir-> seleccionar PHP 8.1
==================================================
Clonar proyecto
$ git clone https://github.com/ponchix/clickbus.git
$ cd ../path/to/the/file
$ Composer install
En el archivo .env debe estar la siguiente linea  DATABASE_URL="mysql://root:@127.0.0.1:3306/pruebaclickbus?serverVersion=mariadb-10.5.8"
Ejecutar en la terminal 
$ php bin/console doctrine:schema:update --force
==================================================
Levantar el servidor web 
Desde terminal symfony server:start 127.0.0.1:8000
Boton iniciar de largon clickbus.test
=================================================
Navegación
En el navegador web 127.0.0.1:8000/conversion ó clickbus.test/conversion
En vista se mostrará un input donde se colocará la cantidad y un select para seleccionar la divisa
Click en boton Convertir para mostrar las divisas solicitadas
En el Navbar está Historial que mostrará las conversiones realizadas
===================================================
