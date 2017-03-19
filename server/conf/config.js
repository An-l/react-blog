module.exports =  {
	appName: 'blog',

	mongoDatabase: 'blog',
	mongoHost: '127.0.0.1',
	mongoPort: 27017,

	tokenSecret: 'test', // token加密需要的私钥
    tokenExpiresIn: 3600, // token存活时间 1h

	redisHost: '127.0.0.1',
    redisPort: 6379,

};