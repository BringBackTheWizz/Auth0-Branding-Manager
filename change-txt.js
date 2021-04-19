var axios = require("axios").default;
const { getToken } = require("./get-token");
const dotenv = require("dotenv");
dotenv.config();

const launch = async () => {
  const token = await getToken();

  let data = {};
  const page = "login-id";

  data[page] = {
    description: "Connectez vous pour accéder a votre panneau de bord.",
  };

  const langage = "fr";

  var options = {
    method: "PUT",
    url: `${process.env.AUDIENCE}/prompts/${page}/custom-text/${langage}`,
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
    data,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error.response);
    });
};

launch();
