const { spawn } = require("child_process");

// test
const arg = {
  whois: "filimo.com",
};

const ipwhois = (domain) => {
  const python = spawn("python", ["index.py", domain]);

  python.stdout.on("data", (data) => {
    console.log(`${data}`);
  });

  // check if error
  python.stderr.on("data", (data) => {
    console.log("error :(");
    console.log(`error ${data}`);
  });

  python.on("close", (code) => {
    console.log(code);
  });
};

module.exports = ipwhois;
