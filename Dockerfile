# The Dockerfile is the description of all the commands to run to assemble the image.
# Read about all the commands here: https://docs.docker.com/engine/reference/builder/

# We also have a docker-compose.yml file, which is used to build and run this Docker image.


# Start from the official Node 8 alpine image. https://hub.docker.com/_/node/
FROM node:8-alpine

# Disable update check
ENV NO_UPDATE_NOTIFIER=true

ENV CHROMEDRIVER_FILEPATH=/usr/bin/chromedriver

# Set the working directory for following commands.
ENV HOME=/
WORKDIR /

# Add a user so that we don't run as root:
#  https://github.com/telusdigital/reference-architecture/blob/3ff683dd68b247ac9a3febda828105fe52cd9390/delivery/docker.md#root-vs-user-mode
RUN set -ex && \
  adduser node root && \
  chmod g+w /

# Install git, which is necessary for the install process.
RUN apk add --no-cache git

# Copy only the files necessary to install dependencies into the working directory.
# Docker builds the image in layers and caches them. Because the app files change more often than the dependencies, we
#  copy the app files only after we install the dependencies.
COPY package.json package-lock.json ./

RUN npm ci

# Copy all source and test files into the working directory.
# We use a .dockerignore file to prevent unnecessary or large files from being inadvertently copied.
# COPY . /

# Build the app.
RUN npx lerna bootstrap --hoist && \
  npm run build -- -a && \
  rm .npmrc

# Set the container's user to the newly created one.
USER node

EXPOSE 6060

# The entrypoint configures the container to be run as an executable.
# Arguments supplied on the command line will be forwarded onto the entrypoint.
ENTRYPOINT ["npm", "run"]
CMD ["dev:e2e"]
