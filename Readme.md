Subschema Loader Factory
===
Simple injector for use with subschema.

##Installation
```sh
  $npm install subschema-factory
```

##Usage
```js
  var DefaultLoader = require('Subschema').DefaultLoader;
  var PropTypes = require('Subschema').PropTypes;
  var loaderFactory = require('loader-factory').loaderFactory;
  var loader = loaderFactory([DefaultLoader], PropTypes);

  loader.addType({
    type1:<Your Type>
  });
  
```
