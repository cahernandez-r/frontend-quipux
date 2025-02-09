FROM node:17 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:alpine

COPY --from=build /app/dist/playlist-manager-fronted /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
