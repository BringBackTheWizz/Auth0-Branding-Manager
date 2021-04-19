const axios = require("axios");
const dotenv = require("dotenv");
const { getToken } = require("./get-token");

dotenv.config();

const launch = async () => {
  const bgImage =
    "https://www.hyperledger.org/wp-content/uploads/2016/08/hl_bg_banner.jpg";
  const token = await getToken();

  const options = {
    method: "PUT",
    url: `${process.env.AUDIENCE}/branding/templates/universal-login`,
    headers: {
      authorization: "Bearer" + token,
      "content-type": "text/html",
    },
    data: `<!DOCTYPE html>
  <html>
    <head>  
      {%- auth0:head -%}
    </head>

    <body>
      {%- auth0:widget -%}
    </body>
  </html> 
<style>
body{
  display: flex;
  justify-content:center;
  background-image: url('${bgImage}');
 background-size: cover;
 min-width: 100%;
 background-position: center;
 background-repeat: no-repeat;
align-items: center;
 }     </style> `
      .split("\n")
      .join(" "),
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

launch();
