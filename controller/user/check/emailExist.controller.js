
const emailExist =  async (req, res) => {
    try {
    } catch (error) {
     return res.status(400).send({ msg: error });
    }
  };

module.exports = emailExist;
