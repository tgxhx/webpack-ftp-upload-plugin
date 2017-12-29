# Webpack-ftp-upload-plugin

> A webpack ftp upload plugin, support upload file or folder to ftp server.

## Installation
```bash
npm i -D webpack-ftp-upload-plugin
```

## Usage
add following code to your webpack config file.
```javascript
var WebpackFtpUpload = require('webpack-ftp-upload-plugin')

new WebpackFtpUpload({
    host: 'host',
    port: 'post', // default: 22
    username: 'user',
    password: 'password',
    local: 'local path', // eg. path.join(__dirname, 'dist')
    path: 'remote path', // eg. /var/www/ftp/
})            
```

## Simple example
```javascript
var path = require('path')
var WebpackFtpUpload = require('webpack-ftp-upload-plugin')

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new WebpackFtpUpload({
            host: '127.0.0.1',
            port: '22',
            username: 'root',
            password: '123456',
            local: path.join(__dirname, 'dist'),
            path: '/var/www/ftp/',
        })
    ]
}
```

## License
This project is licensed under [MIT](http://www.opensource.org/licenses/mit-license.php).