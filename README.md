# GestaCourse
GestaCourse es una aplicación web cuyo propósito es facilitar y mejorar la gestión de la oferta académica, así como la simplificación en el proceso de inscripción a los cursos ofertados por las diversas entidades educativas.
## Requisitos Previos
Asegúrate de tener instalado Node.js en tu máquina. Puedes descargarlo desde [https://nodejs.org/](https://nodejs.org/).
## Configuración del Proyecto
1. Clona este repositorio:
   ```bash
   git clone https://github.com/MAKAIABootcamp/gestaCourse-project-frontend-6.git
   ```
2. Navega al directorio del proyecto.
3. Abre una consola en linux o en windows e instala las dependencias:
   ```bash
   npm install
   ```
## Desarrollo Local
Para ejecutar el proyecto en un entorno de desarrollo local, sigue estos pasos:
1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
2. Abre tu navegador y visita http://localhost:5173. El proyecto se recargará automáticamente si realizas cambios en el código fuente.
## Construcción para Producción
Para construir el proyecto para producción, utiliza el siguiente comando:
   ```bash
   npm run build
   ```
Esto generará una carpeta dist con los archivos optimizados.
## Ejecutar en Producción
Después de construir el proyecto, puedes ejecutarlo en un servidor estático. Utiliza el siguiente comando:
   ```bash
   npm run serve
   ```
Visita http://localhost:5000 en tu navegador.
##Otras Tareas
###Linting
Para ejecutar el linter y corregir posibles problemas, puedes usar:
   ```bash
   npm run lint
   ```
###Pruebas
Para ejecutar las pruebas, utiliza:
   ```bash
   npm test
   ```
