const request = require("request");
const dotenv = require("dotenv");

dotenv.config()
const getToken = async () => {
  const options = {
    method: "POST",
    url: process.env.AUTH_LOGIN_URL,
    headers: { "content-type": "application/json" },
    body:
      `{"client_id":"${process.env.CLIENT_ID}","client_secret":"${process.env.CLIENT_SECRET}","audience":"${process.env.AUDIENCE}","grant_type":"client_credentials"}`,
  };

  const tmp = await new Promise((resolve, reject) => {
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      tokenParsed = JSON.parse(body).access_token;
      resolve(tokenParsed);
    });
  });

  return tmp;
}


module.exports = {
  getToken,
}