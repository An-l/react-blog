const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');  
let log = require('../utils/log');
let config = require('../conf/config');

let url = `${config.mongoHost}:${config.mongoPort}/${config.mongoDatabase}`;

mongoose.connect(url);
var dbConnection = mongoose.connection;
// var dbConnection = mongoose.createConnection(url);

// 连接成功
dbConnection.once('open',() => {
	log.debug('Mongoose connection open to ' + url);
})

// 连接异常
dbConnection.on('error', (err) => {
	log.error('Mongoose connection error: ' + err);
});

// 连接断开
dbConnection.on('disconnected', function () {
	log.debug('Mongoose connection disconnected');
});

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

// 定义post(文章)的模型
let post = new Schema({
	title: String,
	// summary: String,
	category: String,
	tags: Array,
	content: { type: String, default: ''},
	markdownContent: { type: String, default: ''},
	toc: { type: String, default: ''},
	// markdownToc: { type: String, default: ''},
	createdAt: { type: String, default: ''},
	updatedAt: { type: String, default: ''}
});

// 定义category(分类)的模型
let category = new Schema({
	name: String,
	// pathName: String
})

// 定义tag(标签)的模型
let tag = new Schema({
	name: String
})

// 定义user(用户)的模型
let user = new Schema({
	name: String,
	password: String,
    // email: String,
})

// 定义option(博客信息设置)的模型
let option = new Schema({
	blogName: String,
	blogDescription: String,
	url: String,
	faviconUrl: String,
	logoUrl: String,
	githubUrl: String,
	weiboUrl: String,
	ICP: String
})

// 发布模型, 并设置表名
post = mongoose.model('post', post, 'post'),
category = mongoose.model('category', category, 'category'),
tag = mongoose.model('tag', tag, 'tag'),
user = mongoose.model('user', user, 'user');
option = mongoose.model('option', option, 'option');

module.exports = {
	post,
	category,
	tag,
	user,
	option
};
