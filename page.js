const axios = require("axios");

let config = {
  method: "get",
  //   maxBodyLength: Infinity,
  url: "https://api.nimbbl.tech/api/v3/payment-link-by-invoice-id/19228",
  headers: {
    Accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyMTY0MCwic3ViX21lcmNoYW50X2lkIjoyODY5NywiZXhwIjoxNzI2NjU5ODA3LCJ0eXBlIjoibWVyY2hhbnQiLCJpYXQiOjE3MjY2NTg2MDcsImlzcyI6InVybjpuaW1iYmwiLCJ0b2tlbl90eXBlIjoidHJhbnNhY3Rpb24ifQ.PsRKlhKi5aNY6slSyrte3qD205ty5gLFZ0QqPbZLBVo",
  },
};

axios(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
