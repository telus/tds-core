# integration-tests
End to end test suite for PikTV.

## Extending
based on Nightwatch docker from
https://github.com/blueimp/nightwatch

## Intent of Project
This project is meant to provide a quick test that the application is in a usable state after deployment
It is *NOT* meant to be a full regression suite for the application.

refer to:

[Ice cream cone anti pattern](https://watirmelon.blog/2012/01/31/introducing-the-software-testing-ice-cream-cone/)

[Cupcake anti-pattern for automated tests](https://www.thoughtworks.com/insights/blog/introducing-software-testing-cupcake-anti-pattern)

## Setup commit messages

Run:
```sh
git/setup.sh
```

## Usage
To run the complete suite:
```sh
docker-compose run --rm nightwatch
```

A video of the test will be stored in `test/videos`.  
Video recording is done with
[nightwatch-video-recorder](https://github.com/blueimp/nightwatch-video-recorder).

Connect to the chromedriver via VNC:
```sh
VNC_HOST="$(echo "${DOCKER_HOST:-localhost}" | sed 's#.*/##;s#:.*##')"
open vnc://user:secret@"$VNC_HOST":5900
```

The VNC password can be changed via `VNC_PASSWORD` environment variable for the
chromedriver container.

Stop and remove the docker-compose container set:
```sh
docker-compose down -v
```

## Running nightwatch locally

1. Global install nightwatch (optional)
    ```sh
    npm install -g nightwatch
    ```

1. Install chromedriver and add to your path. On OSX with Homebrew:
    ```sh
    brew install chromedriver
    ```

1. Open a terminal window and run `chromedriver`
    ```sh
    chromedriver
    ```
    Be aware that the nightwatch config is set to port 9515, which is the default for `chromedriver`. You may want to launch it using `chromedriver -port 9515` but that will sometimes give an `Invalid port` error.

1. Open another terminal window, navigate into the `test` folder, and run nightwatch
    ```sh
    cd test
    nightwatch --env local
    ```
