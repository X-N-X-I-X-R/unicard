FROM node:18.20.4

WORKDIR /app

COPY package*.json ./

RUN npm install -g expo-cli 
RUN npm install -g dotenv-cli
RUN npm install

COPY . .

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 8081

ENV EXPO_DEVTOOLS_LISTEN_ADDRESS="0.0.0.0"

CMD ["npm", "start"]
