# OpenShift

We use OpenShift to orchestrate the deployment of our Docker containers. It uses shared swarm of "minion" hosts as generic infrastructure for our autoscaling applications. This makes it quick to deploy and scale these containers ephemerally. Every time a new application is deployed, its running as if it is an entirely new application "server", built from scratch.

The script and configuration for the initial deployment to OpenShift is [install.sh](https://github.com/telusdigital/telus-isomorphic-starter-kit/blob/master/openshift/install.sh). It sets up the jenkins server, templates, builds and secrets necessary for exposing our application to consumers.

After installation, we can use our newly created Jenkins pipeline to build and deploy the docker image to staging and production environments. We can also use our templates to create ephemeral/disposable testing environments, pinned to a specific version or custom builds of a docker container.

#### Get access

To use OpenShift, you will need a TELUS Google account. If you have one, [edit this file](https://github.com/telusdigital/openshift-cluster-provisioning/blob/master/dp/data.yaml#L58), add yourself to your respective outcome team, and submit a pull request (for faster results, notify us in #g-delivery on slack).

## Quickstart

### Dependencies

This application requires `openshift-cli` & `vault`. Either install them with `brew` on Mac or `apt-get` on Linux. Also install [ship.py](https://github.com/telusdigital/ship.py).

### Login

#### Vault

In order to kick off the initial installation of a project, or to add or edit any application secrets, you'll need to log in with HashiCorp Vault.

Use our [ship.py](https://github.com/telusdigital/ship.py) utility command line tool to log into vault.

It will ask for your github credentials, create an access token, and use it to authenticate you. You should now be able to read secrets:

> `vault read --format json secret/common/starter-kit`

#### Openshift

For the main cluster (for production apps), log in with:

> `oc login --server=https://api.telusdigital.openshift.com`

For the sandbox cluster (for development apps), log in with:

> `oc login --server=https://api.telusdigitalsandbox.openshift.com`

Visit the URL it tells you to, copy the first `oc login` line, with the token in it, and paste it into your terminal.

### Select project

If you are on the sandbox environment, you can create a new personal project space:

> `oc new-project my-project`

To select an existing project (on either main or sandbox):

> `oc project my-project`

Each outcome team also gets an `o-outcome-team` namespace. Only users who are administrators of their outcome teams can make modifications to these spaces. Otherwise, users will only get view access.

### Install Jenkins

First your project will need Jenkins. We can clone the [default Jenkins starter kit](https://github.com/telusdigital/openshift-jenkins-starter-kit):

> `git clone git@github.com:telusdigital/openshift-jenkins-starter-kit.git`

To install Jenkins in your cluster, run

> `openshift-jenkins-starter-kit/openshift/install.sh`

### Install pipeline

Now you are ready to check out the project, e.g.:

> `git clone git@github.com:telusdigital/telus-isomorphic-starter-kit.git`

To create your Jenkins build pipeline in your project run:

> `telus-isomorphic-starter-kit/openshift/install.sh`

Now Jenkins will build your Docker image, and deploy it to OpenShift. When the pipeline is done, you’ll have a staging environment populated. You can visit the OpenShift console ([Sandbox](https://console.telusdigitalsandbox.openshift.com/console/), [Main](https://console.telusdigital.openshift.com/console/)), and, after clicking on your project, you should see your staging environment. Look under `Builds > Pipelines` to see the status of your pipeline. You'll notice that it is waiting at a `User Input` step, asking if you would like to deploy to production. You can find the login credentials for Jenkins by going to `Applications > Deployments > Jenkins > Environment`, and copying the password (the username is `admin`). After logging into Jenkins, click the button to proceed through to production now, and see the other container come online.

On the sandbox server, you can also override the configured branch, if you want to test specific features or build pipeline changes in isolation.

> `telus-isomorphic-starter-kit/openshift/install.sh my-branch`

### Setup webhook

If you create your own project from the starter kit, you can add a GitHub web hook to compile on commit. From the OpenShift pipeline view, if you click `Edit Pipeline` you should be able to copy your GitHub web hook URL. Under GitHub settings for your project you can click `Webhooks`.

Add an `application/json` webhook and paste in your web hook URL e.g.:

> `https://api.telusdigitalsandbox.openshift.com/oapi/v1/namespaces/tom-test-project/buildconfigs/telus-isomorphic-starter-kit-pipeline/webhooks/tisk/github`

## Configuration

* [Reference Architecture OpenShift standards](https://github.com/telusdigital/reference-architecture/blob/master/delivery/openshift.md)
* [Reference Architecture Kubernetes standards](https://github.com/telusdigital/reference-architecture/blob/master/delivery/kubernetes.md)

* [OpenShift documentation](https://docs.openshift.com/container-platform/3.4/dev_guide/index.html)
* [Kubernetes documentation](https://kubernetes.io/docs/home/)

Our [openshift-template.yml](https://github.com/telusdigital/telus-isomorphic-starter-kit/blob/master/openshift/openshift-template.yml) sets up the jenkins server, templates, builds and secrets necessary for exposing our application to consumers. In order to run this, you must first log in to OpenShift with `oc login` and create or select an existing OpenShift project namespace with `oc project`.

## Local testing

To test OpenShift locally, we recommend using [minishift](https://docs.openshift.org/latest/minishift/getting-started/quickstart.html).

On Mac we can install minishift with brew:

```
$ brew update
$ brew install docker-machine-driver-xhyve
$ sudo chown root:wheel $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve
$ sudo chmod u+s $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve
$ brew cask install minishift
$ minishift config set memory 8192
$ minishift start
```

On other platforms: [see instructions](https://docs.openshift.org/latest/minishift/getting-started/installing.html#installing-instructions)

Once minishift is running, you can log in, create projects, and install your Jenkins and applications normally.
