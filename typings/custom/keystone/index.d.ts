declare module 'keystone' {
  import * as Express from 'express'
  import * as Mongoose from 'mongoose'

  class Content {
    Page: any

    Types: any

    fetch(page, callback)

    store(page, content, callback)

    page(key, page)

    initModel()

    editable(user, options)
  }

  interface KeystoneUtiils {

  }

  interface KeystoneStartEvents {
    onStart?: () => void
    onMount?: () => void
    onHttpServerCreated?: () => void
    onHttpsServerCreated?: () => void
    onSocketServerCreated?: () => void
  } 

  interface KeystoneInitOptions {
    name?: string
    brand?: string
    'admin path'?: string
    comporess?: boolean
    headless?: boolean
    logger?: string
    session?: boolean
    auth?: boolean
    'auto update'?: boolean
    updates?: string
    'model prefix'?: string
    'user model'?: string
    'module root'?: string
    'frame guard'?: string
    mongo?: string
    'cookie secret'?: string
  }

  namespace keystone {
    const utils: KeystoneUtiils

    const content: Content

    function init(options: KeystoneInitOptions)

    function set(name: string, value: any)

    function get(name: string)

    function start(events: KeystoneStartEvents | (() => void))
  }

  export = keystone
}