# Dockerfile
# Pull the base image
FROM node:19-alpine3.17
# Copy app dependencies and app to container
COPY . /usr/src/app/react-frontend
# Set the working directory
WORKDIR /usr/src/app/react-frontend
# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Install dependencies
RUN yarn install
# Deploy app for local development
CMD yarn start --host 0.0.0.0 --port 3000 --disableHostCheck true