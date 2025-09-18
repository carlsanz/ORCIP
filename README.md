# ORCIP — Proyecto React + Vite + Tailwind

## 🚀 Cómo montar este proyecto en un servidor web

Este proyecto fue desarrollado con React, Vite y Tailwind CSS. Para desplegarlo en producción:

1. Clonar el repositorio:
   
   git clone https://github.com/carlsanz/ORCIP.git
   cd ORCIP
Instalar las dependencias:

bash
npm install
## Configurar la ruta base en vite.config.js:

Si el sitio se alojará en la raíz del dominio, usar:


base: './'
Si se alojará en una subcarpeta (por ejemplo https://midominio.com/orcipsite/), 

usar:

base: '/orcipsite/'
Generar el build de producción:

bash
npm run build
Subir el contenido de la carpeta dist/ al servidor web, dentro del directorio público correspondiente.