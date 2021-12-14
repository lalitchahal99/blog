# pull official base image
FROM node:10.19.0-alpine as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

#install your app in images
RUN npm install

# add source files to image directory
COPY . ./

# start app in development environment
# CMD ["npm", "start"]

# create a build
RUN npm run build

# production environment
FROM nginx:latest

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
