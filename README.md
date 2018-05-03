# Getting started with Nationwide's Open Banking API

<!-- ![Nationwide Logo](https://www.nationwide.co.uk/-/media/System/logo2xtrans.png?h=112&w=280) ![IBM Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/320px-IBM_logo.svg.png) -->

## Overview

To get started with the Open Banking API, there are two different routes you can take:

- Option A: run a development environment and web server on your local machine, and then push your changes to a cloud-hosted web server
- Option B: run a development environment and web server on the cloud so you don't need anything installed on your local machine

If you're familiar with Node.js, pick Option A because it will be easier and gives you more control. If you're not familiar with Node.js, pick Option B.

*Note: If you are unable to install software on your computer (like some Nationwide laptops), go with Option B.*

When you've chosen your preferred option, scroll down to the appropriate tutorial and get started.

⚠️ Note: in these tutorials, we'll be using Node.js for our web server and IBM Cloud as our cloud provider. However, feel free to use any other server technologies (like Java or ASP.NET) or other cloud providers (like AWS or Heroku).

## Tutorials

### Option A: develop locally & push to the cloud

To get started with setting up a local development environment, deploying it locally, and then deploying it on IBM Cloud, please visit [this tutorial](https://console.bluemix.net/docs/runtimes/nodejs/getting-started.html#getting-started-with-node-js-on-bluemix).

When you've completed that tutorial, it's time to start using the Open Banking API. Please have a look at the `index.js` and (especially) the `routes.js` files above for some examples of this.

The NBS Open Banking API documentation can be found here: [https://ob-api.innovationwide.co.uk/docs/](https://ob-api.innovationwide.co.uk/docs/).

### Option B: develop and deploy on the cloud

Here's what we'll be doing:

1. Setting up your account on a cloud provider (IBM Cloud in this tutorial)
2. Setting up a development environment on the cloud
3. Deploying your web server (running Node.js) on the cloud
4. Using live edit in your cloud development environment

Here are some short GIFs showing Option A from start to finish:

![Setting up on IBM Cloud](tutorial-videos/1-setting-up-cloud.gif)
![Deploying your web app](tutorial-videos/2-deploying.gif)
![Using live edit in the cloud development environment](tutorial-videos/3-live-edit.gif)

#### 1. Setting up on IBM Cloud

If you don't already have an IBM Cloud account, [sign up here](https://www.ibm.com/cloud/).

IBMers: use your IBM email
Nationwide: use your Nationwide email

If you already have an account, [sign in here](https://console.bluemix.net/dashboard/).

#### 2. Setting up a development environment on IBM Cloud

1. Go to the [IBM Cloud dashboard](https://console.bluemix.net/dashboard/apps) and click the `Create resource` button
2. Enter `continuous delivery` into the search bar and click on `Continuous Delivery`
3. Type in the name of your service (like `continuous-delivery` or `hackathon-project`), select the appropriate region, and then click `Create`
4. On the *Get started with Continuous Delivery* page, click the `Start Here` button
5. Click `Develop a Cloud Foundry app`
6. Type in the name of your toolchain (like `hackathon-project-toolchain`) and select the appropriate region
7. Inside the *Git Repos and Issue Tracking* section towards the bottom of the page, make sure your *Repository type* is set to `Clone` and paste in this *repository URL*: `https://github.com/DMeechan/NBS-Open-Banking-Example.git`. This will 
8. Type in the name of your Git repository (like `hackathon-project`) and click `Create`
9. When that is done, you'll see a breakdown of your toolchain components. Open up the following components in a new tab: `Git`, `Delivery Pipeline`, and `Eclipse Orion Web IDE`

#### 3. Deploying your Node.js server on IBM Cloud

1. Go to the `Eclipse Orion Web IDE` tab
2. In the navigation tree on the left, click the dropdown arrow next to your project's name, find the `index.js` file, and then click on it
3. Have a read through the code (the first 21 lines are the most important)
4. Next, navigate to the `routes.js` file and have a look at the 5 GET endpoints we've provided as examples. Notice that the `/balances` and `/accounts` endpoints both send requests to the NBS Open Banking API
5. Now that we're familiar with the project, click the Play button at the top of the page to deploy your application
6. Wait a few minutes for the application to deploy
7. When the application is deployed, click the `Open the Deployed App` button next to the Play button. This will open up your deployed web server in a new tab
8. You should see a page that says `Open Banking API Example`. Click around and see what it does

#### 4. Using live edit in your cloud development environment

1. Head back to the Orion Web IDE tab and enable 'Live Edit'
2. Wait a few minutes for the application to re-deploy (you may need to re-enable Live Edit if it disables itself)
3. When it is deployed, go back and refresh the web server page to make sure it's still working
4. If it's working fine, go back to the Orion Web IDE and change something in the `public/index.html` file
5. Save the file, go back to the web app, and refresh the page. You should see your change has already updated without refreshing the server.
6. Now go back to the Orion Web IDE and paste the following code on `line 45 of routes.js` (see the *tutorial-videos/3-live-edit.gif* video for a demonstration of this):

```js
app.get("/testing", (req, res) => {
    res.status(200).send('This is a testing page set up without a hard refresh of the server');
});
```

7. Save the file and click the `Restart the App Without Deploying` button (next to the Live Edit switch)
8. Wait a few seconds, go to the web app page, and navigate to `/testing`. You should see the new endpoint appear!

Now your cloud-hosted development environment and deployment are fully set up. 

Enjoy building your project and good luck!
