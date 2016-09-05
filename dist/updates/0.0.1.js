"use strict";
const keystone = require('keystone');
const User = keystone.list('User');
module.exports = function (done) {
    const admin = new User.model({
        email: 'user@keystonejs.com',
        password: 'admin',
        name: { first: 'Admin', last: 'User' }
    });
    admin.isAdmin = true;
    admin.save()
        .then(() => done())
        .catch(err => done(err));
};
