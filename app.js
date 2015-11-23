'use strict';

var Woden = require('woden'),
		woden = new Woden({
			changeOrigin: true
		}),
		redis = require('redis'),
		client = redis.createClient({'return_buffers': true});

client.select(10);

woden.when( /.*/, {
	cacheTimeout: function( cacheEntry, req, proxyRes ) {
    if ( cacheEntry.body.length > 10000000 ) {
      return -1; // don't cache big responses
    }

    if ( proxyRes.statusCode === 404 ) {
      return -1; // don't cache 404 responses
    }

    return 86400; // cache for 24 hours (in seconds for redis)
  }  
})

woden.store({ 
  get: function( key, callback ) {
    client.get(key, function(err, reply){
    	callback(err, JSON.parse(reply));
    });
  },
  set: function( data, callback ) {
    client.set(data.key, JSON.stringify(data.value), function(err, reply){
    	callback();
    });
  }
});

woden.listen(4444);
console.log('Listening on 4444...');