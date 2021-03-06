# ab-jsmodule-template

This is an Peter!! template for a front-end module. The project aims to give an example of how to implement the best practices that are explained in the link below.

https://confluence.schibsted.se/display/AftonbladetIT/Frontend+modules

## Demo
This project contains a demo-page that demonstrates the behaviour of the module. The demo page uses a dist-file so before you open it you need to build them

```npm run bundle```

Then you can open demo/index.html in a browser

## Run unit tests
The unit tests are executed automatically before versioning and publishing using the script targets preversion and prescript in package.json. They can also be executed manually at any time using

```npm test```

## Lint test
```npm run lint```

## Publishing a new version
First you need to decide what version change you should do. Follow the guide-lines of semver.

http://semver.org/

Then when you have merged your changes to the master branch you do 

```npm version patch```or ```npm version minor```or ```npm version major```

and then push the version change

```git push```

and then publish the release to the npm-registry

```npm publish```


