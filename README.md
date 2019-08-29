# App01

Este proyecto fue creado usando [Angular CLI](https://github.com/angular/angular-cli) version 8.3.1.
Esta app fue creada para dictar un curso de Angular 8 y enseñar las siguientes conceptos:

- Data binding o cómo pasar parámetros entre componentes
- Directivas (directives)
- Creación de componentes
- Creación de Servicios
- Acceso a APIs via Angular HttpClient
- Programación reactiva usando RxJs React Programming
- Angular Flex-Layout
- Como utilizar la librearía AG-GRID para mostrar los datos obtenidos via las APIs al estilo planilla Excel
- Formateo y utilización de CSS

## Development server

Ejecutar `ng serve -o` para arrancar un development server (`http://localhost:4200/`). La app se recargará automáticamente cada vez que modifique algo en el código.

## Code scaffolding

Ejecutar `ng generate component path-name/component-name` para generar un nuevo componente. También podés usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build to deploy for a test or production server

Ejecutar `ng build` para crear el bundle TEST del proyecto. El bundle se creará en el directorio `dist/`. User el flag  `--prod` para construir el bundle para PRODUCCION (`ng build --prod`).

## Instalación

Previo a la instalación, es necesario que en el equipo donde se instalará esta app, existan los siguientes programas:
a) Node.Js ver10 o superior
b) npm
c) Angular CLI
d) git

Para la instalación:
1) Clonar este repositorio en un directorio de la PC, utilizando el programa git  (en WIN -> c:\sites   en Mac o Linux -> /opt/sites)
   $  git clone https://github.com/gtanoira/app01.git

2) Instalar todas las dependencias de la app. Correr el siguiente comando desde el directorio de la app:
   $  cd app01    (quedaría  c:\sites\app01 en Win   o   /opt/sites/app01 en Mac o Linux)
   $  npm install

3) Arrancar el server (development)
   $  ng serve -o

## Author

Esta app fue desarrollada por Gonzalo Martinez Tanoira
gonzalo.mtanoira@gmail.com
