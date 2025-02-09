type RootParams = { locale: 'en' | 'zh-CN' }

type Messages = typeof import('~/messages/en.json')
declare interface IntlMessages extends Messages {}
declare module '*.jpg'
declare module '*.png'
