const fs = require('node:fs');
const config = JSON.parse(fs.readFileSync('app.json', 'utf8'));
config.expo.experiments = {...config.expo.experiments, baseUrl: process.env.BASE_PATH || ''};
fs.writeFileSync('app.json', JSON.stringify(config, null, 2));
