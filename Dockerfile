# build command
# docker build -t previewapps .
# specify the node base image with your desired version node:<version>

# Create app directory
FROM node:20.11.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#Copy source
COPY . /usr/src/app

# Install app dependencies
#COPY package.json /usr/src/app/
RUN npm install
ENV NODE_PATH=/usr/src/app/modules/node_modules
ENV NODE_ENV=production

# connect this to external port 80
EXPOSE 3000
CMD node /usr/src/app/bin/www