# CLIMB

Give your Node.js app a CLI with ease.

## Install

``` console
npm i t-ski/climb
```

## Usage

### Register a Command

``` js
const { registerCommand } = require("@t-ski/climb");

registerCommand("start")
  .then(() => {
    registerCommand("help", 1)
      .then(() => api.diplayHelp("start"));
    
    api.start();
  });

registerCommand("help")
  .then(() => api.diplayHelp());
```

``` console
node ./script.js start help
```

### Parse an Argument

``` js
const { parseFlag, parseOption } = require("@t-ski/climb");

parseFlag("dev", "D")
  && console.log("Running development mode");

api.start(parseOption("worker-count").toNumber());
```

``` console
node ./script.js -D --worker-count 4
```

### Prompt the User

``` js
const { prompt } = require("@t-ski/climb");

prompt("Enter your name")
  .then(name => console.log(`Hello ${name}!`));
```

##

<sub>&copy;Thassilo Martin Schiepanski</sub>