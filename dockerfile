FROM node:8.10.0
RUN mkdir -p /usr/src/login-web-app
WORKDIR /usr/src/login-web-app
COPY package.json /usr/src/login-web-app/
RUN npm install
COPY . /usr/src/login-web-app
EXPOSE 8080
CMD [ "npm", "run", "start" ]
