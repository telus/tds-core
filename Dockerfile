# The Dockerfile is the description of all the commands to run to assemble the image.
# Read about all the commands here: https://docs.docker.com/engine/reference/builder/

# We also have a docker-compose.yml file, which is used to build and run this Docker image.


# Start from the official Node 8 alpine image. https://hub.docker.com/_/node/
FROM node:8

# Disable update check
ENV NO_UPDATE_NOTIFIER=true

# Set the working directory for following commands.
ENV HOME=/tds-core
WORKDIR /tds-core

# Add a user so that we don't run as root:
#  https://github.com/telusdigital/reference-architecture/blob/3ff683dd68b247ac9a3febda828105fe52cd9390/delivery/docker.md#root-vs-user-mode
RUN set -ex && \
    adduser node root && \
    chmod g+w /

# Set the container's user to the newly created one.
USER node

# The entrypoint configures the container to be run as an executable.
# Arguments supplied on the command line will be forwarded onto the entrypoint.
ENTRYPOINT ["npm", "run"]
CMD ["dev:e2e-direct"]
