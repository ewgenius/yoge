import * as path from 'path'
import * as dotenv from 'dotenv'
import * as _ from 'underscore'
import * as keystone from 'keystone'

dotenv.config()

keystone.init({
  name: 'yoge',
  'auto update': true,
  updates: path.resolve(__dirname, './updates'),
  session: true,
  auth: true,
  'user model': 'User',
  mongo: process.env.MONGO_URL,
  'cookie secret': process.env.COOKIE_SECRET
})

keystone.set('locals', {
  _,
  env: keystone.get('env'),
  utils: keystone.utils,
  editable: keystone.content.editable
});

(keystone as any).import('models')

keystone.start({
  onHttpServerCreated() {
    (keystone as any).mongoose.Promise = Promise
  }
})