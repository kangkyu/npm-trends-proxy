# Proxy Server


## Getting Started
note: You must have node.js, npm, and redis installed before continuing

Install npm packages (packages.json)
```
npm install
```

Start server (runs on port 4444 by default)
```
npm start
```

Start redis server
```
redis-server /usr/local/etc/redis.conf
```

## Settings
This proxy uses [Woden](https://github.com/honeinc/woden). Include settings in the app.js file.

