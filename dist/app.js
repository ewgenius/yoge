"use strict";
const keystone = require('keystone');
keystone.init({
    name: 'yoge'
});
keystone.start({
    onMount() {
        console.log('mounted');
    },
    onHttpServerCreated() {
        console.log('created');
    }
});
//keystone.
/*

import keystone from 'keystone'
import Promise from 'bluebird'
import _ from 'underscore'
import i18n from 'i18n'
import path from 'path'

keystone.init({
  'name': 'yoservice',
  'brand': 'yoservice',
  'static': '../public',
  'sass': '../public/styles',
  'favicon': '../public/favicon.ico',
  'views': '../templates/views',
  'view engine': 'jade',
  'auto update': true,
  'session': true,
  'auth': true,
  'user model': 'User',
  'mongo': process.env.MONGO_URL
})

keystone.set('s3 config', {
  bucket: 'yoservice',
  key: 'AKIAIL4O25X6YJOMQP5A',
  secret: '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',
  'default headers': {
    'x-amz-meta-X-Default-Header': 'Custom Default Value'
  }
})

keystone.import('models');

keystone.set('locals', {
  _: _,
  env: keystone.get('env'),
  utils: keystone.utils,
  editable: keystone.content.editable
})

i18n.configure({
  locales: ['ru'],
  directory: path.join(__dirname, '../', 'locales')
})

keystone.set('routes', require('./routes'))
keystone.set('cors allow origin', process.env.FRONTEND_URL)
keystone.set('cors allow headers', 'Content-Type, Authorization, userID, token, applicationType')
keystone.set('nav', {
  'Пользователи': ['profiles', 'passports', 'users'],
  'Категории': ['categories', 'parameters', 'values'],
  'Заявки': 'orders',
  'Услуги': 'services',
  'Отклики': ['responses', 'messages'],
  'Такси': ['ServiceTaxi', 'OrderTaxi', 'CarManufacturer', 'CarModel', 'CarColor'],
  'Отзывы': 'reviews',
  'Платежи': ['payments', 'rewards'],
  'Области': ['localities', 'LocalityRegion', 'LocalityCountry'],
  'Пуши': 'pushes'
})

keystone.start({
  onMount() {},

  onHttpServerCreated() {
    keystone.mongoose.Promise = Promise

    keystone.chat = require('./lib/chat')
    keystone.chat.init()

    keystone.memory = require('./lib/memory')
    keystone.memory.initTaxi(1)

    keystone.pusher = require('./lib/pusher')
    keystone.pusher.init()
  }
})

*/ 
