# Usa una imagen oficial de Node.js como base
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el package.json y el package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto al contenedor
COPY . .

# Exponer el puerto que usará la aplicación
EXPOSE 3000

# Establece las variables de entorno desde el archivo .env
# Necesitaremos pasar las variables de entorno en la ejecución del contenedor

# Comando para ejecutar la aplicación
CMD [ "node", "server.js" ]