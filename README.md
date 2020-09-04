# MarvelApp

A basic Ionic-Cordova-Angular project to get comics and rate them.

### Installation

MarvelApp requires [Node.js](https://nodejs.org/) to run and the following dependencies installation.

Install Angular CLI.

```sh
$ npm install -g @angular/cli
```

Install Cordova.

```sh
$ npm install -g cordova
```

Install Ionic CLI.

```sh
$ npm install -g @ionic/cli
```

Install the [pre-requisites needed](https://cordova.apache.org/docs/en/latest/guide/cli/index.html#install-pre-requisites-for-building) for the target platforms. In this project, Android and iOS are added, so MarvelApp can be build for both of them.


Install other dependencies

```sh
$ cd marvelApp
$ npm install
```

### Build for differents enviroments

In this case, the project only use one dev/pre-production/production api for services and don't have too much custom options for each build, but all the configurations are available, if needed, in the *environments* folder. Here are the commands to build for each config:

*Dev:*

```sh
$ ng build --configuration=dev
```
*Dev:*

```sh
$ ng build --configuration=pre
```
*Dev:*

```sh
$ ng build --configuration=prod
```

### Run it on Android

To run this project with the [livereload](https://ionicframework.com/docs/cli/livereload) option, use the following

```sh
$ ionic cordova run android -l
```

