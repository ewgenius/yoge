"use strict";
const path = require('path');
const dotenv = require('dotenv');
const _ = require('underscore');
const keystone = require('keystone');
dotenv.config();
keystone.init({
    name: 'yoge',
    'auto update': true,
    updates: path.resolve(__dirname, './updates'),
    session: true,
    auth: true,
    'user model': 'User',
    mongo: process.env.MONGO_URL,
    'cookie secret': process.env.COOKIE_SECRET
});
keystone.set('locals', {
    _: _,
    env: keystone.get('env'),
    utils: keystone.utils,
    editable: keystone.content.editable
});
keystone.import('models');
keystone.start({
    onHttpServerCreated() {
        keystone.mongoose.Promise = Promise;
    }
});
