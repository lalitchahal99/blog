# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# RUN npm init -y 
# install app dependencies
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install

# add app
COPY . ./

# RUN npm run build

# start app
# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]