# OpenShift

*NOTE*: These manual installation instructions are not necessary if you are using Shippy to install your pipeline.

## Configuration

The OpenShift configuration is in [openshift-template.yml][openshift-template]. It has two templates: one for build, one for deployment. This file defines all of the necessary resources to support the delivery pipeline, staging and production infrastructure.

## Setup

### Login on OpenShift and select project

```bash
oc login --server=https://api.telusdigital.openshift.com        # MAIN
oc login --server=https://api.telusdigitalsandbox.openshift.com # SANDBOX
oc project <projectname>
```

Projects, users, squads and access control is manged by [shippy][shippy].

### Install Jenkins

Any new project will need a Jenkins server. We can clone and deploy the [Jenkins starter kit][jenkins-starter-kit]:
```bash
git clone git@github.com:telus/openshift-jenkins-starter-kit.git
openshift-jenkins-starter-kit/openshift/install.sh
```

### Install pipeline

Once your Jenkins is running, we can launch our pipeline on the project:
```bash
telus-isomorphic-starter-kit/openshift/install.sh <branchname:optional>
```

### Setup webhook

The OpenShift webhook triggers the pipeline to build for each commit to GitHub.

To get the webhook URL:
```bash
oc describe bc telus-isomorphic-starter-kit-pipeline
```

Under GitHub settings for your repository, click `Webhooks`, and add an `application/json` webhook to `push` to the URL.

### Cleanup

If you are testing on sandbox, you may want to delete your project and all of its assets. This can be done in one command:
```bash
oc delete all -l=app=telus-isomorphic-starter-kit
```

*NOTE*: With great power, comes great responsibility...

[openshift-template]: ./openshift-template.yml
[shippy]: https://www.npmjs.com/package/@telus/shippy-cli
[jenkins-starter-kit]: https://github.com/telus/openshift-jenkins-starter-kit