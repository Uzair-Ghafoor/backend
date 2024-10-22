const fs = require('fs');

const getData = (req, res) => {
  const { email, password } = req.body;
  try {
    fs.writeFileSync(
      `${__dirname}/index.txt`,
      JSON.stringify(req.body),

      {
        encoding: 'utf8',
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = getData;
