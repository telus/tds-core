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

RUN apt-get update

# Install Google Chrome, which is necessary for the e2e tests.
RUN curl --silent --show-error --location --fail --retry 3 --output /tmp/google-chrome-stable_current_amd64.deb https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
  && (dpkg -i /tmp/google-chrome-stable_current_amd64.deb || apt-get -fy install)  \
  && rm -rf /tmp/google-chrome-stable_current_amd64.deb \
  && sed -i 's|HERE/chrome"|HERE/chrome" --disable-setuid-sandbox --no-sandbox|g' \
  "/opt/google/chrome/google-chrome" \
  && google-chrome --version

RUN export CHROMEDRIVER_RELEASE=$(curl --location --fail --retry 3 http://chromedriver.storage.googleapis.com/LATEST_RELEASE) \
  && curl --silent --show-error --location --fail --retry 3 --output /tmp/chromedriver_linux64.zip "http://chromedriver.storage.googleapis.com/$CHROMEDRIVER_RELEASE/chromedriver_linux64.zip" \
  && cd /tmp \
  && unzip chromedriver_linux64.zip \
  && rm -rf chromedriver_linux64.zip \
  && mv chromedriver /usr/local/bin/chromedriver \
  && chmod +x /usr/local/bin/chromedriver \
  && chromedriver --version

# Install git, which is necessary for the install process.
RUN apt-get install git

# Copy only the files necessary to install dependencies into the working directory.
# Docker builds the image in layers and caches them. Because the app files change more often than the dependencies, we
#  copy the app files only after we install the dependencies.
COPY package.json package-lock.json lerna.json ./

# Install our dependendies
RUN npm ci

# Remove the previously copied lerna.json.
# This will be replaced by mounting the original under volumes. This allows for it to be properly accessed by our scripts.
RUN rm lerna.json

# Set the container's user to the newly created one.
USER node

# The entrypoint configures the container to be run as an executable.
# Arguments supplied on the command line will be forwarded onto the entrypoint.
ENTRYPOINT ["npm", "run", "test:e2e-direct", "--"]
