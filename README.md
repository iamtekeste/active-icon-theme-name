#active-icon-theme-name
> Get the path to the currently used icon theme.


## Install

```
$ npm install --save active-icon-theme-name
```

Tested on Ubuntu.


## Usage

```js
var iconThemeName = require('active-icon-theme-name');

iconThemeName().then(name => {
	console.log(name);
	//=> 'name of the currently used icon theme'
	//eg. Ultra-Flat
});
```

## License

MIT © [Tekeste G](https://github.com/iamtekeste)
