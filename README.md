nib for CompoundJS [<img src="https://secure.travis-ci.org/compoundjs/nib.png" />](http://travis-ci.org/#!/compoundjs/nib)
===

Enables support for [nib](https://github.com/visionmedia/nib), the one and only [stylus](https://github.com/learnboost/stylus) framework which provides various mixins and functions for your CSS.

## Installation

Step 1. install using npm:

    npm install co-assets-compiler co-nib --save

Step 2. add `co-assets-compiler` and `co-nib` to `config/autoload.js`, for example:

```javascript
module.exports = function (compound) {
    return [
        'ejs-ext',
        'jugglingdb',
        'seedjs',
        'co-assets-compiler',
        'co-nib'
    ].map(require);
};
```
