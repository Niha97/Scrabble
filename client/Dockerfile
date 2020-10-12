FROM node:12 as build
# Create app directory
WORKDIR /src/app
# Install app dependencies
COPY package*.json ./

RUN npm install --silent
# Copy app source code
COPY . ./
RUN npm run build


# production environment
FROM nginx
COPY --from=build /src/app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]