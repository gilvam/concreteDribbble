# concrete-dribbble

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Demo
http://concretedrib.netlify.com

## how to use
This project uses API http://developer.dribbble.com

For the operation of the API, it is necessary to add the token in the app.js file
```
$rootScope.auth = {
    clientAccessToken:'' //add token here
  };
```


## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
