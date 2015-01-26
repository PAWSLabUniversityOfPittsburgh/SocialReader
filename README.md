# SocialReader

### Prerequisites

You need git to clone the angular-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone the repository

Clone this repository using [git][git]:

```
git clone https://github.com/PAWSLabUniversityOfPittsburgh/SocialReader
cd SocialReader
```

### Install Dependencies

We have three kinds of dependencies in this project: tools, angular framework and the Social Reader components code.  The tools help us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular and components code via `bower`, a [client-side code package manager][bower]. The componetns have their own repositories. You can find a list of them in `bower.json`.

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

You should find that you have two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/components` - contains the angular framework files


### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.
