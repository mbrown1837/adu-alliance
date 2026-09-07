const https = require('https');
const agent = new https.Agent({
  rejectUnauthorized: false
});
console.log(process.env.NODE_TLS_REJECT_UNAUTHORIZED);
