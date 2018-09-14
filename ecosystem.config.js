module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'Echoin_api',
      script    : 'server/index.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production',
        HOST: 'localhost',
        PORT: 3001,
        MYSQL_HOST: 'localhost',
        MYSQL_PORT: '3306',
        MYSQL_USERNAME: 'root',
        MYSQL_PWD: '123456'
      }
    },
  ],
};
