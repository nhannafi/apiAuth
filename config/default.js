module.exports = {

  api: {
    port: 3001,
    root: '/api',
  },
  pushNotification: {
    PUBLIC_VAPID: "BNyrAviKR98ZBxxtagXpoMSXIoAfupjtZM3cETsH_AFJ371KZMdGZap1urNbQ4lxU39O9oVgpt7DCT8ww9905IM",
    PRIVATE_VAPID: "WC9JCjMPbG6J0BXKTRSSbXV9NaUv_jP2RBJW1Nmu5Bc"
  },

  frontEnd: {
    domain: 'http://localhost:4200',
  },

  auth: {
    jwt: {
      secret: '0d7c5c5f-768c-4d98-8900-13aadaa21937',
    },
    resetPassword: {
      secret: '56gXxY{+D6/4m#kZ394j2=bT2eHqTAu>r8zAT>yEn:;TM#9*Vg',
      ttl: 86400 * 1000, // 1 day
      algorithm: 'aes256',
      inputEncoding: 'utf8',
      outputEncoding: 'hex',
    },
  },

  dbOracle: {
    user: 'ADMIN_PORTAL',
    password: 'ADMP0rt4lL9',
    connectString: 'a-biliora011.dom101.intres:1525/IBIAIAX1_APPLI',
  },

  dbMongo: {
    url: 'mongodb://nodeServer:12345@a-bilpelk054.dom101.prdres:27017/mydb',
    name: 'mydb',
  },

  logger: {
    console: {
      level: 'debug',
    },
    file: {
      logDir: 'logs',
      logFile: 'backend-api.log',
      level: 'debug',
      maxsize: 1024 * 1024 * 10, // 10MB
      maxFiles: 5,
    },
  },
};
