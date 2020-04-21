module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '123456789',
  database: 'serviceshome',
  
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};