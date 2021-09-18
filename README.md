# What is BugFinder

This package is designed to ease the debugging process

# Installation

`npm install bugfinder --save`

# Usage

```
const { BugFinder } = require('bugfinder');

try {
    nonExistentFunction();
} catch (error) {
    BugFinder(error);
}
```

# Options

BugFinder accepts 2 parameter one of which is optional:

* *error* - You must pass the error you caught on the catch block or just create a new error to use anywhere
* *message* - (Optional) The text you want before the filename and line number