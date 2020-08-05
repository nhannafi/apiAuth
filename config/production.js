module.exports = {

  api: {
    port: 3001,
    root: '/api',
  },

  pushNotification: {
    publicKey: "BNyrAviKR98ZBxxtagXpoMSXIoAfupjtZM3cETsH_AFJ371KZMdGZap1urNbQ4lxU39O9oVgpt7DCT8ww9905IM",
    privateKey: "WC9JCjMPbG6J0BXKTRSSbXV9NaUv_jP2RBJW1Nmu5Bc"
  },

  auth: {
    jwt: {
      secret: '5edb26e5-ec21-4150-9fde-57735eabba99',
    },
    resetPassword: {
      secret: '27e048c1-5575-4807-873e-5b3775419286',
    },
  },

  dbMongo: {
    url: 'mongodb://nodeServer:12345@a-bilpelk054.dom101.prdres:27017/mydb-prod',
    name: 'mydb-prod',
  },

  dbOracle: {
    user: 'ADMIN_PORTAL',
    password: 'ADMP0rt4lL9',
    connectString: 'a-biliora011.dom101.intres:1525/IBIAIAX1_APPLI',
  },
};
