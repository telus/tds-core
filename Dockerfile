# The Dockerfile is the description of all the commands to run to assemble the image.
# Read about all the commands here: https://docs.docker.com/engine/reference/builder/

# We also have a docker-compose.yml file, which is used to build and run this Docker image.


# Start from the official Node 6 alpine image. https://hub.docker.com/_/node/
FROM node:6-alpine

# Set the working directory for following commands.
WORKDIR /app

# Add a user so that we don't run as root:
#  https://github.com/telusdigital/reference-architecture/blob/master/delivery/docker.md#root-vs-user-mode
ENV UID=911 GID=0 HOME=/root
RUN adduser -D -u $UID -G root -h $HOME nodeuser

# Copy only the files necessary to install dependencies into the working directory.
# Docker builds the image in layers and caches them. Because the app files change more often than the dependencies, we
#  copy the app files only after we install the depencendies.
COPY package.json yarn.lock .npmrc ./

# Install dependencies.
RUN yarn install

# Copy all source and test files into the working directory.
# We use a .dockerignore file to prevent unnecessary or large files from being inadvertently copied.
COPY . /app

# Build the app.
# Then give access to the app directory
RUN set -ex && \
    yarn build && \
    yarn cache clean && \
    chmod -R g+rw /app $HOME && \
    chmod g+x $HOME

# Set the container's user to the newly created one.
USER nodeuser

# The entrypoint configures the container to be run as an executable.
# Arguments supplied on the command line will be forwarded onto the entrypoint.
ENTRYPOINT ["yarn"]

# The command is the default when executing the container.
CMD ["start"]
