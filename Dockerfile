FROM node:alpine

# Create app directory
RUN mkdir -p /app/
WORKDIR /app/

# Install app dependencies
COPY package.json yarn.lock /app/
RUN yarn

# Build production
RUN yarn run clean
RUN yarn run build

# Serve production
CMD yarn serve

# bundle app source code
COPY . /app

EXPOSE 3000
