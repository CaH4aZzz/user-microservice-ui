FROM node:latest

WORKDIR /app

COPY package.json /app/package.json

RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

ADD src /app/src
ADD public /app/public

CMD ["npm", "start"]