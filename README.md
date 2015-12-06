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
redis-server
```

## Settings
This proxy uses a forked version of [Woden](https://github.com/johnmpotter/woden). Include settings in the app.js file.

### Increase your github rate limit
You can increase your github rate limit from 60 to 5000 by [registering](https://github.com/settings/applications/new) your app and using your client_id and client_secret

Create a `.env` file in the root directory
```
# .env

GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
```

Your id and secret will automatically be included in all github requests

## Production
In production, simply set your production REDIS_URL env variable to the desired url. 

