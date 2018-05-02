# Getting started with Nationwide's Open Banking API

## Overview

To get started with the Open Banking API, there are two different routes we can take:

- Option A: run a development environment and web server on the cloud so we don't need anything installed on our local machines
- Option B: run a development environment and web server on our local machine, and then push our changes to a cloud-hosted web server

If you don't have much development experience or are unable to install software on your computer (like on most Nationwide laptops), go with Option A. If you prefer more control and flexibility, go with Option B.

When you've chosen your preferred option, scroll down to the appropriate tutorial and get started.

## Tutorials

### Option A: cloud-hosted environment & web server

Here's what we'll be doing:

1. Setting up your account on a cloud provider (IBM Cloud in this tutorial)
2. Setting up a cloud-based development environment
3. Setting up a cloud-hosted web server (running Node.js)
4. Configuring the web server to talk to the Open Banking API
5. Publishing and testing the web app

⚠️ Note: in this tutorial, we'll be using Node.js for our web server and IBM Cloud as our cloud provider. However, feel free to use any other server technologies (like Java or ASP .NET).

#### 1. Setting up on IBM Cloud

If you don't already have an IBM Cloud account, [sign up here](https://www.ibm.com/cloud/).

IBMers: use your IBM email
Nationwide: use your Nationwide email

If you already have an account, [sign in here](https://console.bluemix.net/dashboard/).

#### 2. Setting up a development environment on IBM Cloud

#### 3. Setting up a Node.js server on IBM Cloud

#### 4. Talking to the Open Banking API

#### 5. Publishing the web app

### Option B: local dev environment & cloud-hosted web server

Here's what we'll be doing:

1. Installing software
2. Creating a local Node.js web server
3. Configuring the web server to talk to the Open Banking API
4. Testing the application
5. Setting up your account on a cloud provider (IBM Cloud in this tutorial)
6. Setting up a cloud-hosted web server (running Node.js)
7. Publishing and testing the web app on the cloud

⚠️ Note: in this tutorial, we'll be using Node.js for our web server and IBM Cloud as our cloud provider. However, feel free to use any other server technologies (like Java or ASP.NET) or other cloud providers (like AWS or Heroku).

#### 1. Installing software

Here's the software we'll be installing:

1. Node.js & NPM
2. IBM Cloud CLI (command-line interface)

First, let's check if you already have Node.js and NPM installed:

1. Open up Terminal or CMD
2. Enter `node -v` to see your Node.js version (if you have it installed)
3. Enter `npm -v` to see your NPM version (if you have it installed)

We'll be using **Node.js version 8.11.1** and **NPM version 5.6.0** in this tutorial.

If you don't have these installed, or have a different versions installed, you'll need to download the correct version from here:

> [Node.js LTS download](https://nodejs.org/en/download/)

After that is installed:

1. Restart Terminal or CMD
2. Enter `node -v` to see your Node.js version (should be 8.11.1)
3. Enter `npm -v` to see your NPM version (should be 5.6.0)

Next, let's check if you have the IBM Cloud (Bluemix) CLI installed:

1. Open up Terminal or CMD
2. Run `bluemix --version`

If you have it installed already, you should get something starting with: `bluemix version 0.6.x...`

Otherwise download the latest version from here:

> [IBM Cloud CLI download](ibm.com)

#### 2. Creating a local Node.js server

#### 3. Talking to the Open Banking API

#### 4. Testing the application

#### 5. Setting up on IBM Cloud

#### 6. Creating a Node.js server on IBM Cloud

#### 7. Publishing and testing your web app

